import Layout from "../componentes/Layout";
import Skills from "../componentes/Skills";
import style from '../styles/Index.module.css';
import Certificados from "../componentes/Certificados";
import Projects from "../componentes/Projects";
import About from "../componentes/About";
import Portada from "../componentes/Portada";

export default function Home({ projects }) {

  // console.log(projects)
  return (
    <Layout
      pagina={'Inicio'}
    >
      <main className={`contenedor ${style.content_index}`}>

        <Portada />
        <Skills />
        <Certificados />
        <Projects projects={projects} />
        <About />
        
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/proyects/?populate=*`;
  const resp = await fetch(url);
  const projects = await resp.json();

  return {
    props: {
      projects
    }
  }
}
