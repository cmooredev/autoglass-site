import styles from '../styles/Home.module.css'
import repairPhotoOne from '../public/repairone.jpg'
import repairPhotoTwo from '../public/repairtwo.jpg'
import Image from 'next/image'

export default function Photos({ children }) {
  return (
    <div className={styles.photos}>

      <Image
        class={styles.photo}
        src={repairPhotoOne}
        alt="Billy placing glass."
        width={600} automatically provided
        // height={500} automatically provided
        blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      <Image
        class={styles.photo}
        src={repairPhotoTwo}
        alt="Billy placing glass."
        width={600} automatically provided
        // height={500} automatically provided
        blurDataURL="data:..." automatically provided
        placeholder="blur" // Optional blur-up while loading
      />

    </div>
  )
}
