#/bin/sh
DOC=$1

if [ ! -f "$DOC" ]; then
    echo "Usage: $0 <input google doc saved as html>"
    exit 1
fi

tidy -igq $DOC > s1.html 2> /dev/null

## UMMMM need to find a way to generalize this at some point!
sed -n '/>1\. /,$p' < s1.html > s2.html

sed 's|<h1 |</section></section><section><h1 |' < s2.html > s3.html
#    will have extra close sometimes, which tidy will strip
    
sed 's|<h2 |</section><section><h2 |' < s3.html > s4.html

# cp s4.html s5.html
# led s5.html
#    manually remove the </section> before any h2  *.1

perl -pe 's|</section>(<section><h2 id="(.*)">\d+\.1\.(.*))|$1|' < s4.html > s5a.html

cat prefix.html s5.html > s6.html

tidy -iq < s6.html > s7.html 2> /dev/null

perl -pe 's|>\d+\.\d+\.|>|' < s7.html > s8.html
perl -pe 's|>\d+\.|>|' < s8.html > s9.html

cat s9.html
