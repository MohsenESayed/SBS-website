import '../style.module.css'
import style from '../style.module.css';
import FB from '../icons/Facebook.png'
import IG from '../icons/Instagram.png'
import LI from '../icons/Linkedin.png'

const Board = () => {
  return (
    <>
      <section class={style.team}>
        <h1>Shbab Btsad Shbab <span>Board</span></h1>
        <div class={style.cards} id="Board">
          <div class={style.card}>
            <div class={style.girl}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>CEO</p>
          <h3 class={style.name}>Shahd Nooh</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
          <div class={style.card}>
            <div class={style.boy}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>Chairman</p>
          <h3 class={style.name}>Mohsen El Sayed</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
          <div class={style.card}>
            <div class={style.girl}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>V.CEO</p>
          <h3 class={style.name}>Sama Nooh</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
          <div class={style.card}>
            <div class={style.girl}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>COO</p>
          <h3 class={style.name}>Radwa El Gendy</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
          <div class={style.card}>
            <div class={style.girl}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>CCO</p>
          <h3 class={style.name}>Salma Ahmed</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
          <div class={style.card}>
            <div class={style.girl}>
            <img src="" alt="" />
          </div>
          <p class={style.title}>CAO</p>
          <h3 class={style.name}>Nour Ahmed</h3>
          <div class={style.social}>
            <a href=""><img src={FB} alt="" /></a>
            <a href=""><img src={IG} alt="" /></a>
            <a href=""><img src={LI} alt="" /></a>
          </div>
        </div>
      </div>
    </section >
    </>
    
  )
  
}

export default Board