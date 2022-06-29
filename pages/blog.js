import React from 'react'
import Entrada from '../components/Entrada';
import Layout from '../components/Layout'

const Blog = ({entradas}) => {

  console.log(entradas);

  return (
    <Layout>
      <div>Blog</div>

      <div>
        {entradas.map(e => (
          <Entrada
            key={e.id}
            entrada={e}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const url = 'http://localhost:1337/api/blogs'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()

 console.log(entradas.data);
  return {
    props: {
      entradas: entradas.data
    }
  }
}

export default Blog