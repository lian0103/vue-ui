set -e

npm run build

cp ./assets/scss/index.scss ./dist/dist
cp ./index.js ./dist/
cp -R ./gt-components ./dist/gt-components
cp -R ./assets ./dist
cp -R ./components ./dist/components

npm publish

