pandoc -f markdown -t html `ls -t *.md | head -1` > /tmp/out.html; firefox /tmp/out.html
