#!/bin/sh
echo 'pulling document from google.com'
node report.js > snapshot.html
sed -i '6i <style type="text/css">table { border-collapse: collapse; } td, th { border: 1px solid #aaaaaa; padding: 0.5em;  } td p { margin: 0 } </style>' snapshot.html
sed -i 's|"https://www.google.com/url?q=\([^&]*\)&amp;sa=D&amp;ust=[0-9]*"|"\1"|g' snapshot.html
sed -i 's|"https://www.google.com/url?q=\([^"]*\)"|"\1"|g' snapshot.html
sed -i 's|%3D|=|g' snapshot.html
sed -i 's|%23|#|g' snapshot.html
htmldiff 20180930.html snapshot.html > diff-since-20180930.html
echo 'pushing snapshot.html to github'
git add snapshot.html diff-since-20180930.html
git commit -m'copied from gdoc' snapshot.html diff-since-20180930.html
git push
