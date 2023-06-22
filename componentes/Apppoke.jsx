import Image from "next/image";
import style from "../styles/Project.module.css";

const Apppoke = () => {

  return (
    <div className={style.project_card}>

      <h2>Pokeapp</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src="/img/pokeapp.webp"
        alt={`portada pokeapp charizard volando`}
      />
      <p className={style.project_des}>
        Divertida app diseñada con <strong>Figma</strong> y 
        creada con <strong>ReactJS</strong>
        <br />
        Consulta la pokeapi en el buscador de la app,
        ya sea por nombre o por numero de pokemon.
      </p>
        <a 
          href="https://dancing-lily-67eea8.netlify.app" 
          rel="noreferrer"
          target='_blank'
          className={style.btn_a}
        >
          <div className={`btn_style ${style.project_btn}`}>
            Conoce el Proyecto
          </div>
        </a>

    </div>
  )
}



export default Apppoke
