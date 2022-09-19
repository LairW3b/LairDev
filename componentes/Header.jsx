import Navbar from "./Navbar"
import Logo from "./Logo"
import style from '../styles/Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={style.header_content}>
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header