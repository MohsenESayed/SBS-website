import styles from './OurServices.module.css'

const OurServices = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesImageContainer}>
        <img src="" alt="Group of youth" className={styles.servicesImage} />
      </div>
      <div className={styles.servicesContent}>
        <h2 className={styles.servicesTitle}>OUR SERVICES</h2>
        <div className={styles.serviceItem}>
          <div className={styles.circle}>01</div>
          <p className={styles.serviceText}>
            Informing youth about opportunities (Courses, summer programs, competitions) that help
            them acquire skills such as leadership, scientific research, and soft skills.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.circle}>02</div>
          <p className={styles.serviceText}>
            Making social media campaigns that inform youth about various steps of admission to Egyptian
            universities and studying abroad.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.circle}>03</div>
          <p className={styles.serviceText}>
            Providing a well-prepared environment that supports self-development and self-learning to
            help youth have standout applications in their admission.
          </p>
        </div>
      </div>

    </div>
  )
}

export default OurServices
