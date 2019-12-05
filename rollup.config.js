import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
// import autoPreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

// const preprocess = autoPreprocess({
// 	//markupTagName: 'asd',
// 	test(x) {
// 		console.log(2, x);
// 		return {code: '<a href="test">ok2</a>'};
// 	},
// 	html(x) {
// 		console.log(3, x);
// 		return {code: '<a href="test2">ok3</a>'};
// 	},
// });

function clean_html(html) {
	return html
		.replace(/<!\[CDATA\[[\s\S]*?\]\]>/gm, '')
		.replace(/(<script[\s\S]*?>)[\s\S]*?<\/script>/gm, '$1</' + 'script>')
		.replace(/(<style[\s\S]*?>)[\s\S]*?<\/style>/gm, '$1</' + 'style>')
		.replace(/<!--[\s\S]*?-->/gm, '');
}

function get_attr_value(attrs, name) {
	const match = new RegExp(`${name}\s*=\s*(?:"(.*?)"|'(.*?)'|([^\s>]*))`).exec(attrs);
	return match && (match[1] || match[2] || match[3]);
}

function warn_no_noopener(code, id) {
	const cleaned = clean_html(code);

	let match;
	let pattern = /<a (?<attrs>[\s\S]+?)>/gm;

	while (match = pattern.exec(cleaned)) {
		const attrs = match.groups.attrs;
		const href = get_attr_value(attrs, 'href');
		const rel = get_attr_value(attrs, 'rel');

		if (href && (!rel || !new Set(rel.split(/\s+/)).has('noopener'))) {

			if (href.match(/^(http)?s?:\/{2}/)) {
				console.warn(id, match[0], ' has no rel noopener!', rel && rel.split(/\s+/))
			}
		}
	}
}

export default { // weird, it should be [] or single {}, I think {named} is abused by sapper.. genmenu is never run
	// genmenu: {
	// 	input: 'src/genmenu.js',
	// 	output: {file: 'src/_genmenu.js', format: 'cjs'},
	// 	plugins: [
	// 		{
	// 			name: 'testplugin',
	// 			transform: (code, id) => {
	// 				console.err(id);
	// 			},
	// 		}
	// 	],
	// 	onwarn,
	// },
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			{
				name: 'warn_for_no_noopener',
				transform: (code, id) => {
					if (id.match(/\.svelte$/i)) {
						warn_no_noopener(code, id);
					}
				},
			},
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			json({
				preferConst: true,
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				// preprocess,
			}),
			resolve({
				browser: true,
				dedupe,
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead',
					}],
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true,
					}],
				],
			}),

			!dev && terser({
				module: true,
			}),
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			json({
				preferConst: true,
			}),
			svelte({
				generate: 'ssr',
				dev,
//				preprocess,
			}),
			resolve({
				dedupe,
			}),
			commonjs(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			json({
				preferConst: true,
			}),
			commonjs(),
			!dev && terser(),
		],

		onwarn,
	}
};
