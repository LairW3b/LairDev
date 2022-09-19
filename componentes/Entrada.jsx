import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import style from '../styles/Entrada.module.css'

const Entrada = ({ entrada }) => {
  console.log(entrada)
  const { titulo, resumen, imagen, publishedAt} = entrada.attributes

  const img = imagen.data.attributes.formats.small.url;
  const name_img = imagen.data.attributes.name;

  return (
    <article>

      <div className={style.article_card}>
        <div className={style.article_img}>
          <Image
            layout='responsive'
            width={500}
            height={281}
            src={img}
            alt={`Imagen blog ${name_img}`}
            className={style.img}
          />
        </div>
        <h2>{titulo}</h2>
        <p className={style.fecha}>
          {formatearFecha(publishedAt)}
        </p>
        <p className={style.article_resumen}>
          {resumen}
          </p>
        <Link href={`/blog/${entrada.id}`} >
          <div className={style.article_a}>Leer Entrada</div>
        </Link>
      </div>

    </article>
  )
}

export default Entrada