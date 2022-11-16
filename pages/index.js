import Head from 'next/head'
import Navbar from '../components/navbar'
import Photos from '../components/photos'
import Longintro from '../components/longintro'
import Reviews from '../components/reviews'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import flag from '../public/flag.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Billy's Autoglass Repair</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.logoImg}>
        </div>
          <div className={styles.schedule}>
            <h2>Autoglass repairs and replacements - Simi Valley, CA</h2>
            <div className={styles.grid}>
              <a
                href="/schedule"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <h2>Schedule Now</h2>
              </a>
              <Image
                class={styles.flag}
                src={flag}
                alt="USA Flag"
                width={200} automatically provided
                // height={500} automatically provided
                blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
              />
            </div>
          </div>
          <Longintro />
          <Photos />
          <Reviews />
      </main>

      <footer className={styles.footer}>
          Powered by cmoorelabs
      </footer>
    </div>
  )
}
