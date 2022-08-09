"use strict";
const { series, src, dest } = require("gulp");
const googleWebFonts = require("./google-fonts.cjs");

function genGoogleWebFonts() {
  return src("../../package/assets/fonts.list")
    .pipe(
      googleWebFonts({
        fontsDir: "../fonts/google/googlefonts/",
        cssDir: "../scss/",
        cssFilename: "google-fonts.scss",
        fontDisplayType: "swap",
        // relativePaths: true,
        // hostPath: "css2",
        format: "woff2",
      })
    )
    .pipe(dest("../../package/assets/fonts"));
}

exports.build = series(genGoogleWebFonts);
