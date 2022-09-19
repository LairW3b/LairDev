import style from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGithubAlt, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className={`${style.footer_content} ${style.skills_content}`}>
      <h3>Contáctame</h3>
      <div className={style.footer_links}>
        <a href="https://github.com/LairW3b" target='_blanck'>
          <FontAwesomeIcon
            icon={faGithubAlt}
            className={`${style.github} ${style.icon}`}
          />
        </a>
        <a href="https://www.facebook.com/LairDev/" target='_blanck'>
          <FontAwesomeIcon
            icon={faFacebookF}
            className={`${style.face} ${style.icon}`}
          />
        </a>
        <a href="mailto:lair.w3b@gmail.com" target='_blanck'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${style.mail} ${style.icon}`}
          />
        </a>
        <a href="https://www.linkedin.com/in/lairdev/" target='_blanck'>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={`${style.link} ${style.icon}`}
          />
        </a>
      </div>
      <div className={style.pie}>
        <p>Dising by Lair Rico.</p>
      </div>
    </footer>
  )
}

export default Footer