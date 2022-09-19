import Layout from "../../componentes/Layout";
import Image from "next/image";
import style from "../../styles/Ids.module.css"

import { formatearFecha } from "../../helpers";

const EntradaBlog = ({ entrada }) => {

  const {
    titulo,
    contenido,
    imagen,
    publishedAt
  } = entrada.data.attributes;
  const img = imagen.data.attributes.url;

  console.log(entrada.data);

  return (
    <Layout
      pagina={titulo}
    >
      <main className={`contenedor ${style.entrada_main}`}>
        <div className={style.entrada_header}>
          <h1>{titulo}</h1>
          <hr className={style.hr} />
          <div className={style.entrada_img} >
            <Image
              layout="responsive"
              width={400} height={200}
              src={img}
            />
          </div>
        </div>

        <div className={style.entrada_text}>
          <p className={style.entrada_fecha}>
            {formatearFecha(publishedAt)}
          </p>
          <p className={style.entrada_contenido}>
            {contenido}
          </p>

          <p className={style.entrada_fecha}>
            autor: Lair Rico.
          </p>
        </div>
      </main>
    </Layout >
  )
}

//static paths para paginas dinamicas
export async function getStaticPaths() {
  const url = `http://localhost:1337/api/blogs/?populate=*`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.data.map(entrada => ({
    params: { id: entrada.id.toString() }
  }))

  return {
    paths,
    // Muchas entras true
    //Pocas false
    fallback: true
  }
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/api/blogs/${id}/?populate=*`;
  const respuesta = await fetch(url)
  const entrada = await respuesta.json();

  // console.log(entrada)

  return {
    props: {
      entrada
    }
  }
}

export default EntradaBlog