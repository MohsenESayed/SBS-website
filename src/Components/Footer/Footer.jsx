import styles from "./Footer.module.css"; 

const Footer = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <footer className={styles.footer}>
        <div className={styles.social}>
          <p className={styles.text}>
            <span className={styles.bold}>Follow our social media accounts:</span>{" "}
            @shbab btsad shbab
          </p>
          <div className={styles.links}>
            <a href="https://www.facebook.com/shbab.btsad.shbab">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/shbab-btsad-shbab-in/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/shbab_btsad_shbab/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <p>&copy; 2024 SBS. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
