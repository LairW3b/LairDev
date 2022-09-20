import Layout from "../componentes/Layout";
import Skills from "../componentes/Skills";
import style from '../styles/Index.module.css';
import Certificados from "../componentes/Certificados";
import Projects from "../componentes/Projects";
import Portada from "../componentes/Portada";
import About from "../componentes/About"
import Link from "next/link";

export default function Home() {

  return (
    <Layout
      pagina='LairDev'
    >
      <main className={`contenedor ${style.content_index}`}>

        <Portada />
        <Skills />
        <Certificados />
        <Projects />
        <About />

        <div className={style.index_return}>
          <Link href='#'>
            ▲
          </Link>
        </div>

      </main>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const url = `${process.env.API_URL}/api/proyects/?populate=*`;
//   const resp = await fetch(url);
//   const projects = await resp.json();

//   return {
//     props: {
//       projects
//     }
//   }
// }
