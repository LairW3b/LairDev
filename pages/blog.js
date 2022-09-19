import Entrada from "../componentes/Entrada";
import Layout from "../componentes/Layout";
import style from "../styles/Blog.module.css";

const Blog = ({ entradas }) => {

  // console.log(entradas.data);
  return (
    <Layout
      pagina='Blog'
    >
      <main className={style.blog_content}>

          <div className={style.blog_header}>
            <h2>Blog</h2>
            <hr />
          </div>

          <div className={style.blog_entradas}>
            {entradas.data.map(entrada => (
              <Entrada
                key={entrada.id}
                entrada={entrada}
              />
            ))}
          </div>

      </main>
    </Layout >
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/blogs/?populate=*`;
  const resp = await fetch(url);
  const entradas = await resp.json();


  return {
    props: {
      entradas
    }
  }

}

export default Blog