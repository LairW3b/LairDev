import Image from "next/image"
import style from "../styles/Project.module.css"

const DemoUno = () => {
  return (
    <div className={style.project_card}>

      <h2>Landing Page</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/demo.png"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Landing page con formulario que redirige a whatsapp esta landing page 
        esta desarrollada con <strong>NextJS</strong> framework de <strong>ReactJS</strong>.
      </p>
      <div className={`btn_style ${style.project_btn}`}>
        <a 
          href="https://demo-uno.netlify.app/" 
          target='_blank'
          rel='noreferrer'
        >Conoce el Proyecto</a>
      </div>
    </div>

  )
}

export default DemoUno
