import style from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={style.about_content}>
      <div>
        <h2 id='about'>Acerca de mi</h2>
        <hr className='hr' />
      </div>

      <div className={style.about_content_text}>
        <div className={style.about_img}>
          <Image
            layout='responsive'
            width={40}
            height={30}
            src='/img/jsAbout.webp'
            alt='foto código Javascript'
          />
        </div>

        <p className={style.about_parrafo}>
          Hola, un gusto que visites mi sitio web, mi nombre es Lair, cursé mis estudios en  la Universidad Tecnológica de Puebla me gradue como TSU en Tecnologías de la Información y Comunicación, mi curiosidad y ganas de aprender me han llevado por distintos caminos y a vivir distintas experiencias, siendo el internet mi mejor maestro y el ordenador mi mejor herramienta, me he enfocado en el Desarrollo Web ya que encontré en él un reto y mi manera de poner mi granito de arena a este maravilloso mundo del internet. Me considero una persona autodidacta, curiosa, respetuosa, responsable, agradecida, con interés de seguir aprendiendo y compartiendo lo que sé.
        </p>
      </div>

      <p className={style.about_cita}>
        Poner la mirada en las estrellas y no en los pies, no en aquello que nos amarra al suelo y que configura lo ordinario.
        <br />
        Valeria Sabater
      </p>

      <hr className='hr'/>
    </div>
  )
}

export default About