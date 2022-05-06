#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build-demo

cd docs

git push -f git@github.com:lian0103/vue-ui.git main:gh-pages