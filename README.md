# Welcome

Welcome to this [Angular Express](http://www.angular-express.com) web application.

## How to get started

First install all dependencies:

```bash
$ jspm install
$ npm install
```

To start the Angular Express server:

```bash
$ node index.js
```

then navigate to: `<ip>:9000` in your browser.

![ngx-boilerplate-default-running](https://cloud.githubusercontent.com/assets/1859381/8289575/936cdad0-191d-11e5-934a-08fc095054ac.png)

## Configuring the server

The configuration is stored in configuration files in the `/config` directory.

It can be overriden and extended using the [node-config](https://github.com/lorenwest/node-config) rules:

```bash
# Default configuration
/config/default.js

# Production configuration
/config/production.js

# Local configuration
/config/local.js
```

See [configuration files](https://github.com/lorenwest/node-config/wiki/Configuration-Files) for more information.

## Development

For more details about the technical details, check out the [Angular Express boilerlate documentation](https://github.com/ngx-boilerplates/default).

## Change log

### v0.1.0

- Initial version
