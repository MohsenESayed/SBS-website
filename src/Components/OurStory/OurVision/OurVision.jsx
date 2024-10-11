import styles from './OurVision.module.css'

const OurVision = () => {
  return (
    <div className={styles.visionContainer}>
      <div className={styles.visionImageContainer}>
        <img src="" alt="Group of youth" className={styles.visionImage} />
      </div>
      <div className={styles.visionContent}>
        <h2 className={styles.visionTitle}>OUR VISION</h2>
        <div className={styles.visionItem}>
          <p className={styles.visionText}>
          Our vision is to create a world where every
          young person has access to the resources
          and opportunities they need to succeed in
          their academic and professional pursuits.
          We
          believe that by empowering youth with the
          skills and knowledge they need to excel in
          their chosen fields, we can help build a
          brighter future for all. We strive to be a
          leading provider of innovative and effective
          educational resources, helping students to
          explore their passions, achieve their goals,
          and become the leaders of tomorrow.
          </p>
        </div>
      </div>

    </div>
    )
}

export default OurVision
