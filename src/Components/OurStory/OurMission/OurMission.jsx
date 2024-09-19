import styles from './OurMission.module.css';

const OurMission = () => {
  return (
    <div className={styles.missionSection}>
    <h2 className={styles.missionTitle}>
      <span className={styles.icon}>🤝</span> OUR MISSION
    </h2>
    <p className={styles.missionText}>
      To empower and equip youth in high school and university level with the <br />necessary
      skills, knowledge, and opportunities to succeed in their <br /> academic and professional
      pursuits.
    </p>
    <p className={styles.missionText}>
      We aim to provide a comprehensive <br /> set of resources, including training programs, <br />
      online courses, and standardized test <br /> preparation materials that enable students
      to excel in fields such as STEM.
    </p>
  </div>
  )
}

export default OurMission
