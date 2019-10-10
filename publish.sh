#!/bin/sh
(cd ~/credweb; rm -rf _generated; node ~/Repos/gensite/ && cd _generated/; rsync -avvR --progress . credweb.org:/sites/credweb.org)
