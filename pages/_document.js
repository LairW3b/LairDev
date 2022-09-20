import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" async />
        <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/c05e00f90f.js" async ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}