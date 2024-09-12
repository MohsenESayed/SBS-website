import './BlogPage.css'
import parse from 'html-react-parser';
const BlogPage = () => {
const events = [
    {
        "id": 1,
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "id": 2,
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "id": 3,
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "id": 4,
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    {
        "id": 5,
        "brief": "Brief 3an el event",
        "date": "", 
        "image": ""
    },
    
]
var test = "" ;
events.forEach((event) =>{
    var eventHTML = `
    <div className="event">
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

      </div>
      <section className="main" id='events'>
        {parse(test)}
      </section>
    <div className="scroll">
    <i class="fas fa-arrow-up click" onClick={scrollToTop}></i>
    <h1>Go to top</h1>
    </div>
    </section>
    <footer className="footer">
      <div className="social">
        <p className="text"><span className="bold">Follow our social media accounts:</span> @shbab btsad shbab</p>
        <div className="links">
          <a href="https://www.facebook.com/shbab.btsad.shbab"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/shbab-btsad-shbab-in/"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/shbab_btsad_shbab/"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <p>&copy; 2024 SBS. All Rights Reserved.</p>
    </footer>
    </>
  )
}
export default BlogPage