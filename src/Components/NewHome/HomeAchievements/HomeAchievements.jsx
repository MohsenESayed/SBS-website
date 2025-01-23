import React, { Component } from 'react'
import style from './HomeAchievementsStyle.module.css'
import img from './img.jpg'
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
      </>
    )
  }
}
