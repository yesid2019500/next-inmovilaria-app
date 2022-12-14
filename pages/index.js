
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Container from '../components/Container'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { MainSecion } from '../components/MainSecion'
import { More } from '../components/More'
import { Parallax } from '../components/Parallax'
import SalesSesion from '../components/SalesSesion'

import styles from '../styles/Home.module.css'

export default function Home( {users} ) {
  // console.log( users );
  return (
   
         <div className={styles.container}>
      <Head>
        <title>Inmovilaria app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
      <Banner users={ users } />

      <main className={styles.main}>
          <SalesSesion/>
          <MainSecion/>
          <Parallax/>
          <Description/>
          <More/>
      </main>
      <Footer/>
      </Container>
    </div>

  )
}



Home.getInitialProps = async (ctx) => {
    const response = await fetch('https://db-inmoviliaria-production.up.railway.app/api/inmo')
     const data = await response.json();
     return { users: data }
  }