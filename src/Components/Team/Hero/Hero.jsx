import "../style.css";
import svg from "../icons/home section svg.png";
const TeamHero = () => {
  return (
    <>
    <section id="homeSec">
        <div className="text">
            <p className="top">We are a team,</p>
            <p>We <span>love</span> what we do, Simple as that</p>
            <img src={svg} alt="" className="bgImg"/>
        </div>
    </section>
    </>
  )
}

export default TeamHero