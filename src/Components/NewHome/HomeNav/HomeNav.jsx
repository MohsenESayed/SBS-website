import React from 'react'
import style from './NewNavStyle.module.css'
import './NewNavStyle.module.css'
import logo from './logo.png'
export default function HomeNav() {
  return (
    <>
      <header>
        <img src={logo} alt='logo'/>

        <ul>
            <li><a href='./'>من نحن</a></li>
            <li><a href='./'>التطبيق</a></li>
            <li><a href='./'>انضم الينا</a></li>
            <li><a href='./'>الصفحة الرئسية</a></li>
        </ul>
        <div className={style.buttons}>
            <button className={`${style.button} ${style.buttonOne}`} >تسجيل الدخول</button>
            <button className={`${style.button} ${style.buttonTwo}`}>التسجيل </button>
            
        </div>
      </header>
    </>
  )
}
