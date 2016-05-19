# React Template

This is my react setup, it's an ongoing process. But it provides a basic blueprint to work from with Webpack setup to handle everything (based on the setup from [surviveJS](http://survivejs.com/webpack/introduction/)).

### Details:

**CSS:** Sass is autoprefixed, cleaned(purifycss) and uses PureCSS framework. (TODO: Sort out css minification on production build)

**Webpack:** Dev build has everything lumped together for speed. Production build splits concatenated CSS into separate file and JS off into 3 to aid caching.

**Mocha and Chai:** For tests.

### Installation

If you want to use this template, you'll need a few things.

NPM, Node installed on your machine and a GitHub account. Also, Hub for the command line. You can find details [here](https://hub.github.com/).

First clone this repo (git clone https://github.com/OoogleBoogle/react-template.git), rename the folder and swap out the readme.md for what you want. Then 'npm run setup:react' will install all the dependencies and initialize git and push. The repo will be named after the project file name.

### Scripts

'npm run setup:react' => sets up the project, detailed above.

'npm start' => runs the dev server. Available on localhost/8080 and will refresh automatically.

'npm test' => to run your test suite.

'npm run build' => will make your production build in a separate build folder. (you can run 'webpack -p' in the terminal instead but I'm not a fan of the output);

'npm run stats' => will produce a stats file for use [here](https://webpack.github.io/analyse/)....apparently....it's never worked for me.
