import Image from "next/image";
import style from "../styles/Certifiados.module.css"

const Certificados = () => {
  return (
    <section className={`content ${style.ctr_content}`}>
      <h2
        className="
          text_center 
          text_shadow"
      >
        Certificaciones
      </h2>

      <div className={style.crt_grid}>

        <div className={style.crt_img}>
          <Image
            layout="responsive"
            width={50}
            height={50}
            src={'/img/certificate_icon.png'}
          />
        </div>

        <div className={style.crt_links}>
          <a href='#'>
            <li>Responsive Web Dising</li>
          </a>
          <span>expide: freecodecamp</span>
          <a href="#">
            <li>Algoritmos de JS</li>
          </a>
          <span>expide: freecodecamp</span>
          <a href="#">
            <li>Administracion del tiempo</li>
          </a>
          <span>expide: Udemy</span>
        </div>
      </div>

    </section>
  )
}

export default Certificados