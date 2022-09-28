import style from '../styles/Portada.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Portada = () => {
  return (
    <section className={style.inicio_portada}>
      <div>

        <div className={style.portada_imagen}>
          <Image
            layout="responsive"
            width={8} height={8}
            src='/img/iio2.webp'
            alt='foto de perfil'
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

        <div className={style.portada_icons}>
          <a href="https://www.linkedin.com/in/lairdev/"
            target='_blanck'>
            <FontAwesomeIcon
              icon={faLinkedin}
            />
          </a>
          <a 
            href="https://www.facebook.com/LairDev/"
            target='_blanck'
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
            />
          </a>
          <a
            href="mailto:lair.w4b@gmail.com"
            target='_blanck'>
            <FontAwesomeIcon
              icon={faSquareEnvelope}
            />
          </a>
        </div>

      </div>

    </section>
  )
}

export default Portada