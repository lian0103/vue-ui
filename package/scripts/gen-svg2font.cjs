"use strict";

const { series, src, dest } = require("gulp");
const iconfont = require("gulp-iconfont");
const iconfontCss = require("gulp-iconfont-css");
const runTimestamp = Math.round(Date.now() / 1000);

function svg2css() {
  return src(["../assets/svg/*.svg"])
    .pipe(
      iconfontCss({
        fontName: "gt.icon.font",
        path: "../.template/_icons.scss",
        targetPath: "../../../scss/_icons.scss",
        fontPath: "../fonts/greattree/icon/",
        cssClass: "gt-icon",
      })
    )
    .pipe(
      iconfont({
        fontName: "gt.icon.font",
        normalize: true,
        fontHeight: 5000,
        formats: ["ttf", "eot", "woff", "woff2"],
        className: "gt-icon",
        timestamp: runTimestamp,
      })
    )
    .pipe(dest("../assets/fonts/greattree/icon"));
}

exports.build = series(svg2css);
