set -e

npm run build-demo

cd docs

git add -A

git commit -m 'deploy'

git push -f origin master:gh-pages

cd -