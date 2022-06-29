import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/components/Navbar.module.scss'
import Burger from './Burger'

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className={style.nav_container}>
      
     <div className={`
      ${style.links} 
      ${click ? style.active : ''}
    `}>
      <Link href="/">Inicio</Link>
      <Link href="/portafolio">Portafolio</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">Sobre mi</Link>
     </div>
     <div className={style.burger}>
      <Burger 
        click={click}
        handleClick={handleClick}
      />
     </div>
     <div className={`
      ${style.bg_div} 
      ${click ? style.active : ''}
    `}></div>
    </div>
  )
}

export default Navbar