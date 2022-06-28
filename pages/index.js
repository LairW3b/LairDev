import Layout from '../components/Layout'
import Image from 'next/image'
import style from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={style.bg}>
        
        <h1 className="title">Lair Rico</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, officia delectus, ipsam accusantium cupiditate sit nisi fuga cumque, commodi cum perspiciatis ullam eaque voluptates quis rerum qui at quas aperiam!</p>
      </div>
    </Layout>
  )
}
