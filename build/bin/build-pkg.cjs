'use strict';

const { series, src, dest } = require('gulp');

function copyPackage() {
  return src([
    '../../package/gt-components/**/index.js',
    '../../package/gt-components/**/src/*',
  ]).pipe(dest('../../dist/GT/gt-components/'));
}

function copyPackageIndex() {
  return src(['../../package/index.js']).pipe(dest('../../dist/GT/'));
}

exports.build = series(copyPackage, copyPackageIndex);
