import { useState, useEffect, useRef } from "react";
import style from "./CarouselStyle.module.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";


export default function Carousel() {
    const images=[img1, img2, img3, img4];
    const [index, setIndex] = useState(0);



    function next(){

        setIndex((preiousIndex)=>{return preiousIndex+1});
    }
    function preveous(){
        setIndex((preiousIndex)=>{return preiousIndex+3});

    }
    // const [index, setIndex] = useState(2);
    // const timeRunning = 3000;
    // const timeAutoNext = 7000;
    // const timeoutRef = useRef(null);
    // const autoSlideRef = useRef(null);

    // useEffect(() => {
    //     autoSlideRef.current = setInterval(() => {
    //         handleNext();
    //     }, timeAutoNext);

    //     return () => clearInterval(autoSlideRef.current);
    // }, [index]);

    // const handleNext = () => {
    //     setIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     resetAutoSlide();
    // };

    // const handlePrev = () => {
    //     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //     resetAutoSlide();
    // };

    // const resetAutoSlide = () => {
    //     clearTimeout(timeoutRef.current);
    //     clearInterval(autoSlideRef.current);
    //     timeoutRef.current = setTimeout(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, timeRunning);
    //     autoSlideRef.current = setInterval(handleNext, timeAutoNext);
    // };

    return (
        <div className={style.carousel}>
            {/* <div className={style.list}>
                
                    <div  className={`${style.item}`}> 
                        <img src={images[index%4]}  />
                        <div className={style.content}>
                            <div className={style.author}>hhjgjgbjj</div>
                            <div className={style.title}>test</div>
                            <div className={style.topic}>tessssssssssst</div>
                            <div className={style.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
                            <div className={style.buttons}>
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
            </div> */}


            <div className={style.list}>
                {images.map((img, i) => (
                    <div key={i} className={`${style.item} ${i === index ? style.active : style.notActive} `}> 
                        <img src={img} alt={`Slide ${i + 1}`} />
                        <div className={style.content}>
                            <div className={style.author}>hhjgjgbjj</div>
                            <div className={style.title}>test</div>
                            <div className={style.topic}>tessssssssssst</div>
                            <div className={style.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</div>
                            <div className={style.buttons}>
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={style.thumbnail}>
                {images.map((img, i) => (
                    <div key={i} className={`${style.item} ${i === index ? style.active : ""}`}>
                        <img src={img} alt={`Thumbnail ${i + 1}`} />
                    </div>
                ))}
            </div>

            <div className={style.arrows}>
                <button onClick={next}>&lt;</button>
                <button onClick={preveous}>&gt;</button>
            </div>
        </div>
    );
}
