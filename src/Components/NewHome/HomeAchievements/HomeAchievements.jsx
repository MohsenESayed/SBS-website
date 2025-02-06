import React, { Component } from 'react'
import style from './HomeAchievementsStyle.module.css'
import img from './img.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
export default class HomeAchievements extends Component {
  render() {
    return (
      <>
        <h1 className={style.AchievementHeader}>انجازات شباب بتساعد شباب</h1>

        <div className={style.achievementContainer}>
            <div className={style.achievementCards}>
                <h2 className={style.achievementTitle}>+5 <span>سنوات من الخبرة</span></h2>
                <div className={style.achievementNumbers}>
                    <div className={`${style.achievementCardOne}`}>
                        <h5>10K <span className={style.colorOne}>برنامج تدريبي</span></h5>
                        <h5>20K <span className={style.colorTwo}>مسابقة</span></h5>
                    </div>
                    <hr></hr>
                    <div className={`${style.achievementCardOne} ${style.achievementCardTwo}`}>
                        <h5>15K <span className={style.colorTwo}>دورة تدريبية</span></h5>
                        <h5>12K <span className={style.colorOne}>مصدر تعليمي</span></h5>
                    </div>
                </div>
            </div>
            <img src={img} alt=''/>
        </div>

        <div className={style.achievementPhotos}>
            <div className={style.achievementPhotosRow}>
                <p style={{ backgroundImage: `url(${img1})` , backgroundPosition: `-6em `, boxShadow: `-10px 10px 2px #ffa6c4`}} className={style.achievementPhotoOne} >
                  <span>الحصول علي المركز الأول في جائزة المجليس العربي لشباب العالم 2024</span><br/>
                  اختارت اللجنة ضمن المسار الأول الواعدون 4 أعمال شبابية متوائمة مع معارات القرن الحادي و العشرون و تستهدف مراكذ التنمة المستدامةز منهامبادرة شباب بتساعد شباب في مجال الابداع و حل المشكلات

                </p>
                <p style={{ backgroundImage: `url(${img2})`,  backgroundPosition: `-7em `, zIndex:`0` , boxShadow: `10px 10px 2px #bae8e8`}} className={style.achievementPhotoOne}>
                  <h4>LCOY Egypt <span>2024</span></h4>
                  كشريك مجتمعي للنسخة 2024 من اكتس للتنمية المستدامة و قمة مصر المستدامة للشبابو قمنا البترويج و الأعلان عن التزامنا بتشجيع الممارسات المستدامة و بناء مستقبل أخضر
                </p>
                {/* <img src={img1} alt=''/>
                <img src={img2} alt=''/> */}
            </div>
            <div className={style.achievementPhotosRow}>
                {/* <img src={img3} alt=''/>
                <img src={img4} alt=''/> */}
                <p style={{ backgroundImage: `url(${img3})`, zIndex:`0` , boxShadow: `-10px 10px 2px #bae8e8`}}></p>
                <p style={{ backgroundImage: `url(${img4})`, zIndex:`0` , boxShadow: `10px 10px 2px #ffa6c4`}}></p>
            </div>
        </div>
      </>
    )
  }
}
