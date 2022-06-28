//Import styles
import style from "../styles/components/Footer.module.scss"
//Import librerias fontawesom
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// Import icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <>
      <div className={style.footer_content}>
        {/*<FontAwesomeIcon icon={faCode} /> tag util para
        mi logo*/}
        <a
          href='https://www.linkedin.com/in/lairdev/'
          target='_blank'
        >
          <FontAwesomeIcon
            className={style.footer_icon}
            icon={faLinkedin}
          />
        </a>
        <a
          href='https://github.com/LairW3b'
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faGithubAlt}
            className={style.footer_icon}
          />
        </a>
        <a 
          href='mailto:lair.w3b@gmail.com'
        >
          <FontAwesomeIcon
            className={style.footer_icon}
            icon={faEnvelope}
          />
        </a>
        <a
          href='https://www.facebook.com/LairDev/'
          target='_blank'
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={style.footer_icon}
          />
        </a>
      </div>
    </>
  )
}

export default Footer