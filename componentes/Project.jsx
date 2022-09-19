import Image from "next/image";
import style from "../styles/Project.module.css";

const Project = ({ project }) => {
  const { title, description, link, img } = project.attributes;
  const image = img.data[0].attributes.formats.small.url;
  const name_image = img.data[0].attributes.name;

  return (
    <div className={style.project_card}>

      <h2>{title}</h2>
      <Image
        layout='responsive'
        width={30}
        height={20}
        src={image}
        alt={`Imagen proyecto ${name_image}`}
      />
      <p className={style.project_des}>{description}</p>
      <div className={`btn_style ${style.project_btn}`}>
        <a href={link} target='_blank'>Conoce el Proyecto</a>
      </div>

    </div>
  )
}



export default Project