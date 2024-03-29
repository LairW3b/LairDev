import Image from "next/image";
import style from "../styles/Project.module.css";

const  Clinica = () => {
  return (
    <div className={style.project_card}>

      <h2>Control Pacinetes</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/clinica.webp"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Web App en la podras almacenar los datos de pacientes,  
        editarlos y eliminarlos. 
        Creada con <strong>ReactJS</strong> y almacenando los datos en 
        tu <strong>LocalStorage</strong>
      </p>
        <a 
          href="https://wizardly-jepsen-07580a.netlify.app/" 
          target='_blank' 
          rel="noreferrer"
          className={style.btn_a}
        >
          <div 
            className={`btn_style ${style.project_btn}`}
          >
            Conoce el Proyecto
          </div>
        </a>
    </div>
  )
}

export default Clinica 
