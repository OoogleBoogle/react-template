# React Template

This is my react setup, it's an ongoing process. But it provides a basic blueprint to work from with Webpack setup to 
handle everything (based on the setup from [surviveJS](http://survivejs.com/webpack/introduction/)).

### Details:

**CSS:** Sass is autoprefixed and cleaned(purifycss). (TODO: Sort out css minification on 
production build)

**Webpack:** Dev build has everything lumped together for speed. Production build splits concatenated CSS into 
separate file and JS off into 3 using the commons chunk plugin to aid caching.

**Mocha and Chai:** For tests.

### Installation

If you want to use this template, you can then just clone this as usual. However, I have put a small script together [here](https://gist.github.com/OoogleBoogle/db5d97b8d3e631f3ae7cfd9fde33521d)
which will do all the heavy lifting for you. If you're new to this idea, all you have to do is put a copy of this in
your $PATH (personally, mine is in the '/usr/local/bin/') and then setup an alias in your .bash_profile (or whatever
you use), like so: `alias setup_react="/usr/local/bin/setup_react.sh"` so now all i have to do is type 'setup_react' in 
my terminal. 

If you have Hub installed on your machine it'll make your initial repository for you and push the initial commit to GitHub.

The script will work fine without Hub, but it comes highly recomended. You can find details about it [here](https://hub.github.com/).

### NPM Scripts

'npm run setup:react' => sets up the project, detailed above.

'npm start' => runs the dev server. Available on localhost/8080 and will refresh automatically.

'npm test' => to run your test suite.

'npm run dev' => to start both the express server and webpack, just to check it's all wired up properly.

'npm run build' => will make your production build in a separate build folder. (you can run 'webpack -p' in the terminal 
instead but I'm not a fan of the output);

'npm run stats' => will produce a stats file for use [here](https://webpack.github.io/analyse/)....apparently....it's 
never worked for me.
