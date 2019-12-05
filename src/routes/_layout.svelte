<script>
	import Nav from '../components/Nav.svelte';
	//import { writable } from 'svelte/store'

	export let segment;

	// import { setContext } from 'svelte';
	// import { stores } from '@sapper/app';

	// const pageinfo = writable({})
	// setContext('pageinfo', pageinfo)

	// const { page } = stores()
	// let title = '';
	// setContext('title', val => title = val);
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
<!-- <pre>{JSON.stringify($pageinfo)}</pre>
<h1>{title}</h1> -->
<Nav {segment}/>
<main>
	<slot></slot>
</main>