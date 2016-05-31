#!/usr/bin/env node

var fse = require("fs-extra");
var harp = require('harp');
var path = require('path');

/**************************************************************************
 * Define paths
 *************************************************************************/

var root = path.resolve(__dirname, '..');
var sourcePath = path.resolve(root, 'src');
var destPath = path.resolve(root, 'dist');

/**************************************************************************
 * No need to touch anything below
 *************************************************************************/

console.log("Compiling, please wait...");
console.log("  source: %s", sourcePath);
console.log("  destination: %s", destPath);

// First remove existing destination directory
fse.removeSync(destPath);

harp.compile(sourcePath, destPath, function(err, output){

  if(err) {
    abort(err);
  }

  var srcPackages = path.resolve(sourcePath, '_jspm_packages');
  var destPackages = path.resolve(destPath, '_jspm_packages');

  fse.stat(srcPackages, function(err, stats){

    if (err) {
      console.log('Skipped package: %s not found', srcPackages);
      return done();
    }

    console.log("Copying _jspm_packages");
    console.log("  source: %s", srcPackages);
    console.log("  destination: %s", destPackages);

    fse.mkdirs(destPackages, function (err) {

      if(err) {
        return abort(err);
      }

      fse.copy(srcPackages, destPackages, function (err) {
        if (err) {
          return abort(err);
        }

        done();
      });

    });

  });

});

function done(){
  console.log("Successfully compiled to %s", destPath);
}

function abort(err){
  // console.log(JSON.stringify(err, null, 2));
  console.error(err.message);
  console.error('Compilation aborted');
}
