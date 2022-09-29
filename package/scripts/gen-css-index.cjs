var fs = require("fs");
var path = require("path");
var Components = require("../components.json");
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, "../assets/scss");

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

var indexContent = "/* Automatically generated by 'build/bin/gen-css-index.cjs' */\n" +
  "@import './base.scss';\n";
Components.forEach(function (key) {
  var fileName = key + ".scss";
  indexContent += '@import "./' + fileName + '";\n';
  var filePath = path.resolve(basepath, fileName);
  if (!fileExists(filePath)) {
    fs.writeFileSync(filePath, "", "utf8");
    console.log(" create ", fileName, " .scss");
  }
});
fs.writeFileSync(path.resolve(basepath, "index.scss"), indexContent);
