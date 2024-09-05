import style from "./HeroStyle.module.css";
import Link from "../../../public/icons/Link.png";
import file from "../../../public/icons/file (1) 1.png";
import buttonGoogle from "../../../public/icons/button-google-play.svg.png";

const HeroSeciton = () => {
  return (
    <>
      <header>
        <div>
          <p>
            <span>Shbab Btsad Shbab</span>
            is a youth-led organization that helps young people find educational
            and career opportunities.
          </p>
          <h6>Empowering Youth, Building Futures</h6>

          <div className={style.buttons}>
            <img src={Link} alt="" />
            <img src={buttonGoogle} alt="" />
          </div>
        </div>
        <img src={file} alt="" />
      </header>
    </>
  );
};

export default HeroSeciton;
