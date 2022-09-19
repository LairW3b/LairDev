import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children, pagina}) => {
  return (
    <div>
      
      <Head>
        <title>LairDev - {pagina}</title>
      </Head>

      <Header />

      {children}

      <Footer/>

    </div>
  )
}

export default Layout