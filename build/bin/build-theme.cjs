"use strict";

const { series, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const tailwindcssNesting = require("tailwindcss/nesting");

function compile() {
  return src(["../../package/assets/scss/*.scss"])
    .pipe(
      postcss([
        postcssImport,
        tailwindcssNesting,
        tailwindcss("../../tailwind.config.js"),
        autoprefixer,
      ])
    )
    .pipe(sass.sync())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("../../dist/GT/style/css"));
}
function copyfont() {
  return (
    src("../../package/assets/fonts/**")
      // .pipe(cssmin())
      .pipe(dest("../../dist/GT/style/fonts"))
  );
}

function copyScss() {
  return (
    src("../../package/assets/scss/**")
      //
      .pipe(dest("../../dist/GT/style/scss"))
  );
}

exports.build = series(compile, copyfont, copyScss);
