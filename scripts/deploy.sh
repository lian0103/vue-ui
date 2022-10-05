set -e

npm run build-GT

npm run build-Chart

npm run doc

npm run demo


cd demo

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lian0103/vue-ui.git master:gh-pages

cd -