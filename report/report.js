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
  shortName: 'not-published-as-TR'
}

config.abstractHTML = 'Abstract TBD'

config.sotdHTML = `
    <div id="real-sotd" style="margin: 1em; border: 4px solid blue; padding: 1em">
    <p>This is just an un-reviewed editors draft.  Please send comments.</p>
    <p>If you're okay with Google Docs, please <b><a href="https://docs.google.com/document/d/1WWYQ33Y9ENcueiFnrb3hJzD2rxKCRw9ok8T3PrDLOB8">use the live version</a></b>.</p>
    <p>This snapshot version is made from time to time, but is no more stable or authoritative than the live version.</p>
    </div>
`

convert(config).then(x => process.stdout.write(x))
