# package.json
#  "name": "gt-front-ui",
#  "main": "./dist/GT/gt-ui.umd.js",
#  "module": "./dist/GT/gt-ui.es.js",
#  "exports": {
#    ".": {
#      "import": "./dist/GT/gt-ui.es.js",
#      "require": "./dist/GT/gt-ui.umd.js"
#    },
#    "./dist/GT/style.css": "./dist/GT/style.css"
#  },
#
#
#

set -e

npm run build-GT
npm run build-Qua
npm run build-Ele

npm publish

cd -