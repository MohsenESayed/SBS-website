import '../style.module.css'
import style from '../style.module.css';
import FB from '../icons/Facebook.png'
import IG from '../icons/Instagram.png'
import LI from '../icons/Linkedin.png'

const Leaders = () => {
  return (
    <>
      <section class={style.team}>
        <h1>Shbab Btsad Shbab <span>Leaders</span></h1>
        <div class={style.cards} id="leaders">
          <div class={style.card}>
            <div class={style.boy}>
              <img src="" alt="" />
            </div>
            <p class={style.title}>Head Of HR</p>
            <h3 class={style.name}>Omar Mohamed</h3>
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
            <p class={style.title}>Head Of Marketing</p>
            <h3 class={style.name}>Sara Eid</h3>
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
            <p class={style.title}>Head Of Content</p>
            <h3 class={style.name}>Mohamed Tamer</h3>
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
            <p class={style.title}>Head Of PR</p>
            <h3 class={style.name}>Lama Mohamed</h3>
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
            <p class={style.title}>Head Of Creative</p>
            <h3 class={style.name}>Mina Bishoy</h3>
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
            <p class={style.title}>Head Of Telegram</p>
            <h3 class={style.name}>Huda El Gendy</h3>
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
            <p class={style.title}>Head Of Web</p>
            <h3 class={style.name}>Zeyad Emad</h3>
            <div class={style.social}>
              <a href=""><img src={FB} alt="" /></a>
              <a href=""><img src={IG} alt="" /></a>
              <a href=""><img src={LI} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Leaders