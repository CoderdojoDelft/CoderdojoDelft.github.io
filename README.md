[![Build Status](https://travis-ci.org/CoderdojoDelft/CoderdojoDelft.github.io.svg?branch=develop)][Travis-CI]

# Coder Dojo Delft website

This project was bootstrapped with [Create React App].

This project uses:

- Styled components
- React router
- `gh-pages` to deploy to github pages.

## Contributing

If you want to contribute, use the `develop` branch, the `master` branch contains the built JavaScript that is deployed on github.

To share your contributions, please open a pull request.

## Developing

Checkout the develop branch locally. Then run:

```
npm install
npm start
```

Our beautiful website will open at http://localhost:3000/.

## Deploying

The website is hosted on Github Pages.
Every commit to the `develop` branch is automatically built
and deployed by [Github Actions].

The website can be deployed manually by running:

```
npm run deploy
```

This will build the website,
commit the build output to the master branch,
and push the master branch to Github.

 [Github Actions]: https://github.com/CoderdojoDelft/CoderdojoDelft.github.io/actions
 [Create React App]: https://github.com/facebook/create-react-app

