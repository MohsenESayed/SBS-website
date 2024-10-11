import style from './CoursesCategory.module.css'
import img1 from './imgs/1.png'
const CoursesCategory = () => {
  return (
    <>
    <div className={style.coursesCategory}>
      <h1>Explore Top <span>Courses Caterories </span>
      <br></br>
      That Change Yourself</h1>
      <div className={style.container}>

        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>
        <div className={style.card}>
          <img src={img1} alt="img1" />
          <h2>Web Design</h2>
          <h6>3 Courses</h6>
        </div>


      </div>
      

    </div>
    
    </>
  )
}

export default CoursesCategory