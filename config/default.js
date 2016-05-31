module.exports = {

  server: {

    // Whether or not to serve files starting with _
    serveUnderscores: true,

    // Absolute path or relative to the repository root
    appRoot: 'src/',

    // Port to listen on
    port: 9000
  },

  // Logger configuration
  logger: {

    // combined | common | dev | short | tiny
    format: 'combined'
  }

};
