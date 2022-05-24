set -e

npm run build-demo

cd docs

git add -A

git commit -m 'deploy'

# git push -f origin main:gh-pages
git push -f git@github.com:lian0103/vue-ui.git main:gh-pages

cd -