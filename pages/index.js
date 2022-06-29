import Layout from '../components/Layout'
import Image from 'next/image'
import style from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <Layout>
      <main className={style.index_content}>

        <div className={style.index_portada}>
          <Image 
            layout='responsive' 
            width={190} 
            height={40} 
            src='/img/circles.svg'
          />
          <h3 className="title">Fronted developer, JavaScript, ReactJs</h3>
          <h3 className='title'>Pasión por el desarrollo web</h3>
        </div>
      </main>
    </Layout>
  )
}
