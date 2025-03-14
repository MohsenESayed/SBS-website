import { React, useState, useEffect, useRef } from "react";
import style from "./NewCarouselStyle.module.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

export default function NewCarousel() {
  const [index, setIndex] = useState([2, 1, 1, 1]); 
  const [x, setX] = useState(0);
  const [animate, setAnimate] = useState(false);

  const [images,rearangeImages]=useState([img1, img2, img3, img4]);

  const activeImageRef = useRef(null);
  const [scaleFactor, setScaleFactor] = useState(1)
  const objects = [
    { author: "author one", title: "Title 1", topic: "topic 1" },
    { author: "author two", title: "Title 2", topic: "topic 2" },
    { author: "author three", title: "Title 3", topic: "topic 3" },
    { author: "author four", title: "Title 4", topic: "topic 4" },
  ];


  // Calculate the scale factor dynamically
  useEffect(() => {
    if (activeImageRef.current) {
      const originalWidth = activeImageRef.current.offsetWidth;
      setScaleFactor(100 / originalWidth);
    }
  }, [x]); // Recalculate when the active image changes

  function next() {
      setIndex((index) => {
        let maxValue = Math.max(...index);
        let newIndex = [...index];
        newIndex[(x + 1) % 4] = maxValue + 1;
        console.log(index);
        return newIndex;
      });
      setTimeout(()=>{

        rearangeImages((images) => {
          return [...images.slice(1), images[0]]; // Move first element to last position
        });
        setAnimate(true);


      },300)
      
  
      setX((prevX) => (prevX + 1) % 4);
      setAnimate(false);
  }
  

  function previous() {
      setIndex((index) => {
        let maxValue = Math.max(...index);
        let newIndex = [...index];
        newIndex[(x - 1 + 4) % 4] = maxValue + 1;
        return newIndex;
      });
  
     

      setTimeout(()=>{

        rearangeImages((images) => {
          return [images[images.length - 1], ...images.slice(0, images.length - 1)];
        });
        setAnimate(true);


      },300)
  
      setX((prevX) => (prevX - 1 + 4) % 4);
      setAnimate(false);
  }
  

  return (
    <>
      <div className={style.carousel}>
        <div className={style.list}>
          <img src={img1} style={{ zIndex: index[0] }} className={`${index[0] === Math.max(...index) ? style.active : ""} ${style.headerImages}`} />
          <img src={img2} style={{ zIndex: index[1] }} className={`${index[1] === Math.max(...index) ? style.active : ""} ${style.headerImages}`} />
          <img src={img3} style={{ zIndex: index[2] }} className={`${index[2] === Math.max(...index) ? style.active : ""} ${style.headerImages}`} />
          <img src={img4} style={{ zIndex: index[3] }} className={`${index[3] === Math.max(...index) ? style.active : ""} ${style.headerImages}`} />
        </div>

        <div className={`${style.content} ${animate ? style.fadeOut : style.fadeIn}`} key={x}>
          <div className={style.author}>{objects[x].author}</div>
          <div className={style.title}>{objects[x].title}</div>
          <div className={style.topic}>{objects[x].topic}</div>
          <div className={style.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
        </div>


        <div className={`${style.thumbnail} ${animate ? style.activeThumbnail : ""}`}>
                {images.map((img, i) => (
                    <div key={i} className={`${style.item}`}>
                        <img src={img} className={style.imageList} alt={`Thumbnail ${i + 1}`} />
                    </div>
                ))}
            </div>

        <div className={style.arrows}>
          <button onClick={previous}>&lt;</button>
          <button onClick={next}>&gt;</button>
        </div>
      </div>
    </>
  );
}
