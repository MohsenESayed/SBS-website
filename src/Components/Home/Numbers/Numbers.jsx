import React from 'react'
import style from './Numbers.module.css'
export default function Numbers() {
  return (
    <>
    <div className={style.container}>


        <div className={style.box}>
            
            <div className={style.card}>
                <h1>+732</h1>
                <p>OBM AMBASSADORS</p>
            </div>

            <div className={style.card}>
                <h1>+2M</h1>
                <p>HIGH SCHOOL STUDENT IMPACTED</p>
            </div>

        </div>



        <div className={style.box}>
            
            <div className={style.card}>
                <h1>210</h1>
                <p>INTERNATIONAL & NATIONAL INSTITIONS</p>
            </div>

            <div className={style.card}>
                <h1>120</h1>
                <p>STARTUPS % CORPORATES PARTNEED</p>
            </div>

        </div>

       


    </div>
    </>
  )
}
