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
      <a href="/">Home</a>
      <a href="/">Shop</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
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