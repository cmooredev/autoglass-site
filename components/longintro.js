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
        <h2>
          Mobile Autoglass Repair and Replacement
        </h2>
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
              <li><Image className={styles.check} src={check} height={25} width={25} /> Long crack repairs</li>
              <li><Image className={styles.check} src={check} height={25} width={25} /> Window replacements</li>
              <li><Image className={styles.check} src={check} height={25} width={25} /> Rock chip repairs</li>
              <li><Image className={styles.check} src={check} height={25} width={25} /> Door glass repairs</li>
              <li><Image className={styles.check} src={check} height={25} width={25} /> Window motor replacements (regulator)</li>
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
