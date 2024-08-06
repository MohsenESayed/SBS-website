import React, { Component } from 'react'
import style from "./headerStyle.module.css"
import Link from "./icons/Link.png";
import file from "./icons/file (1) 1.png";
import buttonGoogle from "./icons/button-google-play.svg.png";
export default class Header extends Component {
  render() {
    return (
      <>
      <header>
            
            {/* </header><img src="img/logo_main 1.png" id="logo_main" alt=""> */}
            <div>
                
                <p>
                    <span>Shbab Btsa'd Shbab </span>
                    is a youth-led organization that helps young 
                    people find educational and 
                    career opportunities.
                </p>
                <h6>Empowering Youth, Building Futures</h6>
                
                <div className={style.buttons}>
                    
                    <img src={Link} alt=""/>
                    <img src={buttonGoogle} alt=""/>
                </div>
            </div>
            <img src={file} alt=""/>
            
        </header>
      </>
    )
  }
}
