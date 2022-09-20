import Image from "next/image";
import style from "../styles/Project.module.css";

const Project = () => {

  return (
    <div className={style.project_card}>

      <h2>Pokeapp</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/pokeapp.png"
        alt={`Imagen proyecto`}
      />
      <p className={style.project_des}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere similique ipsum saepe sapiente quisquam iure doloribus consequatur harum perferendis.
      </p>
      <div className={`btn_style ${style.project_btn}`}>
        <a href="#" target='_blank'>Conoce el Proyecto</a>
      </div>

    </div>
  )
}



export default Project