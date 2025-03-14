import React, { Component } from "react";
import style from "./HomeContactStyle.module.css";
import phone from "./phone.png";
import googlePlay from "./GooglePlay.png";
import appleStore from "./AppleStore.png";
import wave from "./wav.png"; // Add a wavy background image

export default class HomeContact extends Component {
  render() {
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
        <div className={style.contactContainer}>
          <div className={style.downloadApp}>
            <h2>حمل تطبيق</h2>
            <h1>شباب بتساعد شباب</h1>
            <h6>و اعرف اكتر عن المنح و البرامج المتاحة بطريقة سهلة و مخصصة علشانك</h6>
            <img src={googlePlay} alt="Google Play Store" />
            <img src={appleStore} alt="Apple App Store" />
          </div>
          <img src={phone} alt="Mobile App" />
        </div>

        {/* <h1 className={style.followUs}>
          تابعونا
          <br /> علي
        </h1> */}

        <div className={style.socialMedia}>
          <div className={style.socialMediaRow}>
            <a href="https://www.youtube.com/">
              <i className="fa-brands fa-youtube"></i> YOUTUBE
            </a>
            <a href="https://www.whatsapp.com/">
              <i className="fa-brands fa-whatsapp"></i> Whatsapp
            </a>
          </div>
          <div className={style.socialMediaRow}>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </a>
          </div>
          <div className={style.socialMediaRow}>
            <a href="https://t.me/">
              <i className="fa-brands fa-telegram"></i> Telegram
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className={style.footer}>
          <div className={style.footerWave}>
            <img src={wave} alt="Footer Wave" />
          </div>
          
          {/* Social Icons */}
          <div className={style.socialIcons}>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.whatsapp.com/">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          {/* Footer Text */}
          <p>جميع الحقوق محفوظة لموقع شباب بتساعد شباب</p>

          {/* Footer Links */}
          <div className={style.footerLinks}>
            <a href="#">تواصل معنا</a>
            <a href="#">من نحن</a>
            <a href="#">سياسة الاستخدام</a>
            <a href="#">سياسة الخصوصية</a>
          </div>
        </footer>
      </>
    );
  }
}
