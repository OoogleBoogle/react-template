# React Template

This i my react setup, it's an ongoing process. But it provides a basic blueprint to work from with Webpack setup to handle everything (based on the setup from [surviveJS](http://survivejs.com/webpack/introduction/)).

### Details:

**CSS:** Sass is autoprefixed, cleaned(purifycss) and uses PureCSS framework. (TODO: Sort out css minification on production build)

**Webpack:** Dev build has everything lumped together for speed. Production build splits concatenated CSS into separate file and JS off into 3 to aid caching.

**Mocha and Chai:** For tests.

### Installation

If you want to use this template, you'll need a few things.

NPM, Node installed on your machine and a GitHub account. Also, Hub for the command line. You can find details [here](https://hub.github.com/).

With that installed you need to name your project file with '-' for spaces. This will be the html doc <title> and also the name of your github repo.

While in your project folder, clone this repo with 'git clone (TODO: will update when I've actually pushed)' then in your terminal/command line 'npm run setup'. This installs all the require packages, inits GIT, makes the initial commit and pushes it to GitHub.

### Scripts

'npm run setup' => sets up the project, detailed above.
'npm start' => runs the dev server. Available on localhost/8080 and will refresh automatically.
'npm test' => to run your test suite
'npm run build' => will make your production build in a separate build folder. (you can run 'webpack -p' in the terminal instead but I'm not a fan of the output);
'npm run stats' => will produce a stats file for use [here](https://webpack.github.io/analyse/)....apparently....it's never worked for me.
