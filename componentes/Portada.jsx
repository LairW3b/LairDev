import style from '../styles/Portada.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Portada = () => {
  return (
    <section className={style.inicio_portada}>
      <div>

        <div className={style.portada_imagen}>
          <Image
            layout="responsive"
            width={8} height={8}
            src='/img/lair.jpg'
            className={style.portada_img}
          />
        </div>

        <Link href="#about">
          <div className={style.portada_link}>
            Acerca de mi...
          </div>
        </Link>

      </div>

      <div className={style.portada_text}>

        <p >
          <span className={style.portada_p}>
            Desarrollador Frontend, Javascript y React.
          </span>
          <br />
          Construyendo nuevas habilidades todos los días.
        </p>

      </div>

    </section>
  )
}

export default Portada