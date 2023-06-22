import Image from "next/image";
import style from "../styles/Project.module.css";

const  BienesRaices = () => {
  return (
    <div className={style.project_card}>

      <h2>Bienes Raíces</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/bienesraices.png"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Web App que permite agregar propiedades dinamicamente así como usuarios,
        realizada con: <strong>PHP</strong>, <strong>SQL</strong>, <strong>HTML</strong>,  
         <strong> CSS</strong> y <strong>Javascript</strong>.
      </p>
      <a 
        href="https://www.youtube.com/watch?v=1n2SrVxl65k" 
        target='_blank'
        rel='noreferrer'
        className={style.btn_a}
      >
        <div className={`btn_style ${style.project_btn}`}>
          Video Demo
        </div>
      </a>
    </div>
  )
}

export default BienesRaices
