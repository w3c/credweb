const convert = require('gdoc2respec')

const config = {
  gdocID: '1WWYQ33Y9ENcueiFnrb3hJzD2rxKCRw9ok8T3PrDLOB8',
  noRecTrack: true,
  edDraftURI: 'https://credweb.org/report/snapshot',
  specStatus: 'ED',
  editors: [{
    name: 'Sandro Hawke',
    url: 'http://hawke.org/sandro'
  }],
  github: 'https://github.com/w3c/credweb',
  shortName: 'not-published-as-TR',
  wg: 'Credible Web Community Group',
  wgURI: 'https://www.w3.org/community/credibility/'
}

config.abstractHTML = 'This document is a primer for developing and improving technological methods to help promote trust and accuracy, especially on the web and involving news reporting. While not always comprehensive, it attempts to guide people away from overly simplistic designs and reveal a wide array of potential solutions. Impatient readers may want to start with <a href="#h.32pkwj5grlt3">section 10 (Promising Technical Approaches)</a> or <a href="#h.wpcxeg3cugmx">section 11 (Potential New Web Standards)</a>.'

config.sotdHTML = `
    <div id="real-sotd" style="margin: 1em; border: 4px solid blue; padding: 1em">
    <p>This is an Internal Review Draft (an "Editors Draft").  Members of the Community Group, please use <a href="https://www.w3.org/2002/09/wbs/103073/report/">this form</a> to express your view on whether this should published for Public Review.</p>

    <p>This snapshot version is made from time to time, but is not necessarily more stable or authoritative than the <a href="https://docs.google.com/document/d/1WWYQ33Y9ENcueiFnrb3hJzD2rxKCRw9ok8T3PrDLOB8">Google Docs version of this document</a>, where edits are made.</p>

    <hr/>

<p>This document summarizes and expands discussions from mid-2018 within the <a href="">W3C Credible Web Community Group</a>. It contains ideas and other content contributed by group members, often in discussion with the wider community.
</p>

<p>Comments are welcome and are especially useful if they offer specific improvements which can be incorporated into future versions.  Please comment either by <a href="https://github.com/w3c/credweb/issues">raising a github issue</a> or making inline comments on the <a href="https://docs.google.com/document/d/1WWYQ33Y9ENcueiFnrb3hJzD2rxKCRw9ok8T3PrDLOB8">Google Docs version of this document</a>.  If neither of those options work for you, please email your comments to <a href="mailto:public-credibility-comments@w3.org">public-credibility-comments@w3.org</a> (<a href="https://lists.w3.org/Archives/Public/public-credibility-comments/">archive</a>, <a href="mailto:public-credibility-comments-request@w3.org?subject=subscribe">subscribe</a>).
</p>

    </div>
`

convert(config).then(x => process.stdout.write(x))
