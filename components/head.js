import NextHead from 'next/head'

const defaultDescription = 'The Official Electrifying China Website'
const defaultOGURL = 'http://www.electrifyingchina.com'

const Head = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || ''}</title>
    <meta
      name='description'
      content={props.description || defaultDescription}
    />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta property='og:url' content={props.url || defaultOGURL} />
    <meta property='og:title' content={props.title || ''} />
    <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
  </NextHead>
)

export default Head