'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const tailwindcssNesting = require('tailwindcss/nesting');

function compile() {
  return src(['../assets/scss/*.scss'])
    .pipe(
      postcss([
        postcssImport,
        tailwindcssNesting,
        tailwindcss('../../tailwind.config.js'),
        autoprefixer,
      ])
    )
    .pipe(sass.sync())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('../dist/assets/css'));
}
function copyfont() {
  return (
    src('../assets/fonts/**')
      // .pipe(cssmin())
      .pipe(dest('../dist/assets/fonts'))
  );
}

function copyScss() {
  return (
    src('../assets/scss/**')
      //
      .pipe(dest('../dist/assets/scss'))
  );
}

function copyImgs() {
  return (
    src('../assets/images/**')
      //
      .pipe(dest('../dist/assets/images'))
  );
}

exports.build = series(compile, copyfont, copyScss, copyImgs);
