'use strict';

const { series, src, dest } = require('gulp');

function copyPackage() {
  return src([
    '../../package/gt-components/**/index.js',
    '../../package/gt-components/**/src/*',
  ]).pipe(dest('../../dist/gt-components/'));
}

function copyPackageIndex() {
  return src(['../../package/index.js']).pipe(dest('../../dist/'));
}

function copyPackageUseComps() {
  return src(['../../package/components/*']).pipe(dest('../../dist/components/'));
}


exports.build = series(copyPackage, copyPackageIndex , copyPackageUseComps);
