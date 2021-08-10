#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo "
🅱🅴🆂🆃 🅸🅳🅻🅴 🅶🅰🅼🅴
" >> README.md

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/aleksandar-radev/best-idle-game.git master:gh-pages
