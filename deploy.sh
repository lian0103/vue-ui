set -e

npm run build-demo

cd demo

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lian0103/vue-ui.git master:gh-pages

cd -