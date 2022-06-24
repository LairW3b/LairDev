import styles from '../styles/components/Header.module.scss'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className={styles.header}>
        <Logo />
        <Navbar />
    </div>

  )
}

export default Header