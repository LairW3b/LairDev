import  Image from "next/image"
import style from '../styles/components/Logo.module.scss'

const Logo = () => {
  return (
    <div className={style.logo}>
      <Image 
        src='/img/circles.svg' 
        width={80} 
        height={80} 
      />
      <h1 className={style.text_logo}>
        LairDev
      </h1>
    </div>
  )
}

export default Logo