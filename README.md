# Angular Code Review

Welcome to the public repository of [angularcodereview.com](http://angularcodereview.com/).

[![angularcodereview](https://cloud.githubusercontent.com/assets/1859381/15802364/7cc7a72a-2aaf-11e6-9d93-ba3fcfb94292.png)](http://angularcodereview.com/)

## How to contribute

Want to add or change items in the code review checklists? Awesome!

Here's the best way to contribute:

1. [Create a new issue](https://github.com/jvandemo/angularcodereview-com/issues/new) to discuss the changes you would like to see
2. Create a PR referencing the issue your PR is tackling

Quick links to the checklist source code:
- [src/angularjs/index.jade](src/angularjs/index.jade)
- [src/angular-2/index.jade](src/angular-2/index.jade)

## How to run the website locally on your machine

First install all dependencies:

```bash
$ npm install -g jspm
$ npm install
$ jspm install
```

To start the Angular Express server:

```bash
$ node index.js
```

then navigate to: `<ip>:9000` in your browser.

## How the code works

For more details about the technical details, check out the [Angular Express boilerplate documentation](https://github.com/ngx-boilerplates/default).

## How to deploy

The repository is configured with [Travis CI](https://travis-ci.org) to automatically deploy updates to [Firebase hosting](https://www.firebase.com).

To deploy manually:

```bash
$ npm run deploy
```

## Change log

### v0.1.0

- Initial version
