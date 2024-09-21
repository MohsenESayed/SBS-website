import './BlogPage.css'
import parse from 'html-react-parser';
import circle from './Circle.png'
const DotsPatern = () =>{
  return(
    <>
    <div className="grid">
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
      <img src={circle} alt="circle" />
    </div>
    </>
  )
}
const BlogPage = () => {
const events = [
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    
]
var test = "" ;
events.forEach((event , i) =>{
    var eventHTML = `
    <div className="event">
      <div className='number'>
        <p> ${i + 1} </p>
      </div>
      <div className="text">
        <div className="brief">
        <h2>${event.brief}</h2>
        </div>
        <div className="date">
          <h2>date: ${event.date}</h2>
        </div>
      </div>
      <div className="image">
        <!--<img src="${event.image}" />-->
      </div>
    </div>
    `
    test += eventHTML ;
  })
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" / >
<section className="container">
      <div className="scroll">
        <h1>Blog</h1>
        <i class="fas fa-arrow-down"></i>
        <div className='dots top'>
        <DotsPatern />
        </div>
      </div>
      <section className="main" id='events'>
        {parse(test)}
      </section>
    <div className="scroll">
    <div className='dots bottom'>
      <DotsPatern />
    </div>
    <i class="fas fa-arrow-up click" onClick={scrollToTop}></i>
    <h1>Go to top</h1>
    </div>
    </section>
    </>
  )
}
export default BlogPage