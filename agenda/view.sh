pandoc -f markdown -t html `ls -t *.md` > /tmp/out.html; firefox /tmp/out.html
