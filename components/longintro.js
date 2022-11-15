import styles from '../styles/Home.module.css'
import Image from 'next/image'
import repair from '../public/repair.svg'
import repairguy from '../public/repairguy.svg'
import check from '../public/check.svg'
import clock from '../public/clock.svg'

export default function Longintro({ children }) {
  return (
    <div className={styles.description}>
      <div className={styles.longintro}>
        <h2>We come to you</h2>
        <div className={styles.tools}><Image src={repairguy} height={75} width={75} />
        </div>
        <h1>
          Mobil Autoglass Repair/Replacement
        </h1>
        <div>
          <p>Schedule an appointment today and <b>we will come to you</b>.</p>
          <p>Based in Simi Valley, CA - Serving Southern California</p>
        </div>

        <div className={styles.services}>
          <h2>Services</h2>
          <div className={styles.tools}><Image src={repair} height={75} width={75} />
          </div>
          <div>
            <ul>
              <li>Long cracks repairs<Image className={styles.check} src={check} height={25} width={25} /></li>
              <li>Replace windows<Image className={styles.check} src={check} height={25} width={25} /></li>
              <li>Rock chip repairs<Image className={styles.check} src={check} height={25} width={25} /></li>
              <li>Door glass repairs<Image className={styles.check} src={check} height={25} width={25} /></li>
              <li>Replace window motor (regulator)<Image className={styles.check} src={check} height={25} width={25} /></li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Brand new windshield in under 30 minutes!</h2>
          <div className={styles.tools}><Image src={clock} height={75} width={75} /></div>
        </div>

      </div>
    </div>
  )
}
