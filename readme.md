commands:

npm run build = "webpack --config webpack.prod.js"
npm run dev = "webpack serve --open --config webpack.dev.js"
npm run deploy = "git subtree push --prefix dist origin gh-pages"

packages/libraries to install:

npm install --save-dev webpack webpack-cli
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-merge

linter and formatter:
npm install --save-dev eslint @eslint/js
npm install --save-dev --save-exact prettier