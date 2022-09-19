import Image from 'next/image'
import style from '../styles/Logo.module.css'
import Link from 'next/link'


const Logo = () => {
  return (
    <>
      {/* <Link href="/"> */}
      <div className={style.logo_header}>
        <div className={style.logo_header_img}>
          <Image
            src='/img/circles.svg'
            width={80}
            height={80}
            alt='Logo lairdev'
          />
        </div>
        <h2 className={style.logo_text}>
          LairDev
        </h2>
      </div>
      {/* </Link> */}
    </>
  )
}

export default Logo