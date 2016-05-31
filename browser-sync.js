var browserSync = require('browser-sync');
var reload = browserSync.reload;
var chokidar = require('chokidar');

chokidar
  .watch('src/**/*.less', {
    ignored: [
      'src/_jspm_packages/**/*'
    ]
  })
  .on('all', function (event, path) {
    reload("app.css", {
      stream: true
    });
  });

chokidar
  .watch('src/**/*.jade', {
    ignored: [
      'src/_jspm_packages/**/*'
    ]
  })
  .on('all', function (event, path) {
    reload();
  });

browserSync({
  proxy: "localhost:9000",
  open: true,
  notify: {
    styles: ['opacity: 0', 'position: absolute']
  }
});
