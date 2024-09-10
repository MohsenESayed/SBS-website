import style from "../style.module.css";
import "./Hero.module.css";
import svg from "../icons/home section svg.png";
const TeamHero = () => {
  return (
    <>
    <section id={style.homeSec}>
        <div class={style.text}>
            <p class={style.top}>We are a team,</p>
            <p>We <span>love</span> what we do, Simple as that</p>
            <img src={svg} alt="" class={style.bgImg}/>
        </div>
    </section>
    </>
  )
}

export default TeamHero