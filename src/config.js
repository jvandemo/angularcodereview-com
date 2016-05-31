System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "_jspm_packages/github/*.js",
    "npm:*": "_jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.1",
    "babel": "npm:babel-core@5.5.8",
    "babel-runtime": "npm:babel-runtime@5.5.8",
    "core-js": "npm:core-js@0.9.18",
    "normalize.css": "github:necolas/normalize.css@4.1.1",
    "github:angular/bower-angular-mocks@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.5.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

