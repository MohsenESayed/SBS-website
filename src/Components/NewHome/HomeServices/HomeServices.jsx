import React, { Component } from 'react'
import style from './HomeServicesStyle.module.css'
import img from './img.png'
export default class HomeServices extends Component {
  render() {
    return (
      <>
        <img className={style.servicesImg} src={img} alt=''/>
        <p className={style.servicesParaghraph}>شباب بتساعد شباب هي منظمة هدفها تساعدك في مرحاة الثانوية و الجتمعة علي اكتشاف الفرص التعليمة المختلفة في مجالات متنوعة زي</p>


        <div className={style.serContainer} >
        <div className={`${style.serItem} ${style.serItemColorOne}`}>
        <h2>خطط تطوير الذات</h2>
            </div>
            <div className={`${style.serItem} ${style.serItemColorTwo}`}>
                <h2>البرامج الصيفية</h2>
            </div>
            <div className={`${style.serItem} ${style.serItemColorOne}`}>
                <h2>الدورات التدريبية</h2>
            </div>
            <div className={`${style.serItem} ${style.serItemColorTwo}`}>
                <h2>الدورات التدريبية</h2>
            </div>
            <div className={`${style.serItem} ${style.serItemColorOne}`}>
                <h2>تحسين اجادة اللغة</h2>
            </div>
            <div className={`${style.serItem} ${style.serItemColorTwo}`}>
                <h2>المنح الدراسية</h2>
            </div>
        </div>
      </>
    )
  }
}
