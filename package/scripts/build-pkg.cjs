'use strict';

const { series, src, dest } = require('gulp');

function copyPackage() {
  return src([
    '../gt-components/**/index.js',
    '../gt-components/**/src/*',
  ]).pipe(dest('../dist/gt-components/'));
}

function copyPackageIndex() {
  return src(['../index.js']).pipe(dest('../dist/'));
}

function copyPackageUseComps() {
  return src(['../components/*']).pipe(dest('../dist/components/'));
}


exports.build = series(copyPackage, copyPackageIndex , copyPackageUseComps);
