set -e

npm run build-GT
npm run build-Qua
npm run build-Ele

npm version patch

npm publish

git commit -m "npm publish"

git push

cd -