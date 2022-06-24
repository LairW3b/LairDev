import style from "../styles/components/Footer.module.scss"
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className={style.footer_content}>
        <Image
          src='/img/Github.svg'
          alt="logo github"
          width={50}
          height={50}
          className={style.img}
        /> 
        <Image
          src='/img/gmail.svg'
          alt='logo gmail'
          width={50}
          height={50}
          className={style.img}
        />
        <Image
          src='/img/facebook.svg'
          alt='logo facebook'
          width={50}
          height={50}
          className={style.img}
        />
        <Image
          src='/img/linkedin.svg'
          alt='logo linkedin'
          width={50}
          height={50}
          className={style.img}
        />
      </div>
    </>
  )
}

export default Footer