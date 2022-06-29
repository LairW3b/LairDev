import React from 'react'

const Entrada = ({entrada}) => {

  const {title, resumen} = entrada.attributes;

  return (
    <article>
      <h2>{title}</h2>
      <img src="http://localhost:1337/uploads/vimvscode_6385da52bb.jpg" alt="portada vs code vim blog" />
      <p>{resumen}</p>
    </article>
  )
}

export default Entrada