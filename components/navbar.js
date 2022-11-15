import styles from '../styles/Home.module.css'

export default function Navbar({ children }) {
  return (
    <div class={styles.navbar}>
      <ul>
       <li class={styles.left}><a href="default.asp">Home</a></li>
       <li class={styles.left}><a href="news.asp">Schedule</a></li>
       <li class={styles.right}><a href="tel:8056382432">Call 805-638-2432</a></li>
      </ul>
    </div>
  )
}
