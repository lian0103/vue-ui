set -e

npm run build-GT
npm run build-Qua
npm run build-Ele

npm publish

git commit -m "npm publish"

cd -