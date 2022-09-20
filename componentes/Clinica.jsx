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
        src="/img/clinica.png"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Webapp en la podras almacenar los datos de pacientes,  
        editarlos y eliminarlos. 
        Creada con <strong>ReactJS</strong> y almacenando los datos en 
        tu <strong>LocalStorage</strong>
      </p>
      <div className={`btn_style ${style.project_btn}`}>
        <a href="https://wizardly-jepsen-07580a.netlify.app/" target='_blank'>Conoce el Proyecto</a>
      </div>

    </div>
  )
}



export default Clinica 