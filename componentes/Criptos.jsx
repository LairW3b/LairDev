import Image from "next/image";
import style from "../styles/Project.module.css";

const  Criptos= () => {

  return (
    <div className={style.project_card}>

      <h2>Criptomonedas</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/criptos.png"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Webapp en la que podras consultar el costo de 
        las principales criptomonedas, esta app esta desarrollada
        con <strong>ReactJS</strong> framework de <strong>Javascript</strong>.
        

      </p>
      <div className={`btn_style ${style.project_btn}`}>
        <a href="https://practicacriptomonedas.netlify.app/" target='_blank'>Conoce el Proyecto</a>
      </div>

    </div>
  )
}



export default Criptos