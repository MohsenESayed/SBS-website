import styles from './OurStory.module.css'

const OurStory = () => {
  return (
    <div className={styles.OurStoryContainer}>
      <h2 className={styles.title}>Our Story</h2>
      <div className={styles.OurStory}>

        <div className={styles.left}>
          <div className={styles.event}>
            <div className={styles.year}>2020</div>
            <div className={styles.description}>..........</div>
          </div>
          <div className={styles.event}>
            <div className={styles.year}>2022</div>
            <div className={styles.description}>.........</div>
          </div>
          <div className={styles.event}>
            <div className={styles.year}>2024</div>
            <div className={styles.description}>.......</div>
          </div>
        </div>

        <div className={styles.middleLine}></div>

        <div className={styles.right}>
          <div className={styles.event}>
            <div className={styles.year}>2021</div>
            <div className={styles.description}>.....</div>
          </div>
          <div className={styles.event}>
            <div className={styles.year}>2023</div>
            <div className={styles.description}>.........</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
