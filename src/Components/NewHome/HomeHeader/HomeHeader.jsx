import React, { Component } from 'react'
import style from './HomeHeaderStyle.module.css'
import logo from './logo.png'
export default class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className={style.headerBackground}>
            <img className={style.headerLogo} src={logo} alt='logo'/>
            <p className={style.headerParaghraph}><span>شباب بتساعد شباب</span>
            <br/>
             لخلق عالم فيه كل شاب بامكتنية الوصول الي الموارد و الفرص التي يحتاجونها للنجاح</p>

        </div>
      </>
    )
  }
}
