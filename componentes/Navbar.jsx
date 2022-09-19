import { useState } from "react"
import Link from "next/link"
import style from "../styles/Navbar.module.css"
import Burger from "./Burger"

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  const handleOff = () => {
    setClick(false)
  }

  return (
    <>
      <div className={
        `${style.nav}
         ${click ? style.active : ''}   
      `}>

        <Link href="/">
          <a onClick={handleOff}>Inicio</a>
        </Link>
        <Link href="#proyectos">
          <a onClick={handleOff}>Proyectos</a>
        </Link>
        <Link href="#about">
          <a onClick={handleOff}>About</a>
        </Link>
        
      </div>
      <div className={style.burger}>
        <Burger
          click={click}
          handleClick={handleClick}
        />
      </div>

      <div className={`
        ${style.bg_div}
        ${click ? style.active_burger : ''}
      `}>
      </div>

    </>
  )
}

export default Navbar