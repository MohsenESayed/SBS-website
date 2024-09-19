import styles from './Hero.module.css';

const OurStoryHero = () => {
  return (
    <>
    <div className={styles.headerSection}>
      <h1 className={styles.title}>We are a non-profit</h1>
      <h1 className={styles.title}>organization</h1>
      <h1 className={styles.title}>established in 2020</h1>
      <p className={styles.subTitle}>lead by Youth for Youth</p>
      <div className={styles.imageContainer}>
        <img src="k" alt="team" className={styles.image} />
      </div>
  </div>
  <hr />
  </>

  )
}

export default OurStoryHero
