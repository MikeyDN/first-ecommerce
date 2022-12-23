import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet" />

      </Head>
          <body>
          <div id="pre-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span>Suspendisse laoreet magna vel diam lobortis imperdiet</span>
              </div>
            </div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
