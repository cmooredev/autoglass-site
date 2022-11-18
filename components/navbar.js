import styles from '../styles/Home.module.css'
import logo from '../public/autoglass.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar({ children }) {
  return (
    <div className={styles.navbar}>
      <ul>
       <li className={styles.left}><Link target="_top" href="https://squareup.com/appointments/book/fav37xmfpk4rh4/L66805DQ6QAN4/start" rel="nofollow">Book Now
       </Link></li>
       <li className={styles.right}><Link href="tel:8056382432">Call 805-638-2432</Link></li>
      </ul>
    </div>
  )
}
