#!/bin/sh
echo 'pulling document from google.com'
node report.js > snapshot.html
sed -i '6i6 <style type="text/css">table { border-collapse: collapse; } td, th { border: 1px solid #aaaaaa; padding: 0.5em;  } td p { margin: 0 } </style>' snapshot.html
echo 'pushing snapshot.html to github'
git add snapshot.html
git commit -m'copied from gdoc' snapshot.html
git push
