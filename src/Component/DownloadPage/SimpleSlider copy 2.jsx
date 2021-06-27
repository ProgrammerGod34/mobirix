import React from "react";
import style from './DownloadPage.module.css'
import man from '../../assets/img/man1.png'

const SimpleSlider = () => {

  const items = [
    <div className={style.review}>
      <div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>A really efficient way to make identify your plants. Recently Moz bed house and needed to identifying fy what was growing</p>
        <div className={style.man}>
          <img src={man} alt="" />
          <p>Michael Strickland</p>
        </div>
      </div>
    </div>,
    <div className={style.review}>
      <div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>sdgbhngdn fgch egfhnfgcvghfdcx trghdfgcfgfx dfhgdfgcv dfghdfxdgg fy what was growing</p>
        <div className={style.man}>
          <img src={man} alt="" />
          <p>Michael Strickland</p>
        </div>
      </div>
    </div>,
    <div className={style.review}>
      <div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>erghersdtfghfggfs hrtygtfdfgbhnmjhytgref erfghj,mhgnhfgefwrergh rhtdfgfsghn</p>
        <div className={style.man}>
          <img src={man} alt="" />
          <p>Michael Strickland</p>
        </div>
      </div>
    </div>,
    <div className={style.review}>
      <div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>A really efficient way to make identify your plants. Recently Moz bed house and needed to identifying fy what was growing</p>
        <div className={style.man}>
          <img src={man} alt="" />
          <p>Michael Strickland</p>
        </div>
      </div>
    </div>,
    <div className={style.review}>
      <div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>sdgchsdazxd trdfxdzfvxc jrsdghfgdg yttfgdgvsdx jyfgxtgvsdzg fgvcxgfvsdxcg gfdxcgfvdfhwing</p>
        <div className={style.man}>
          <img src={man} alt="" />
          <p>Michael Strickland</p>
        </div>
      </div>
    </div>
  ];

  // Индекс текущего слайда
const [activeIndex, setActiveIndex] = React.useState(0);
const slidePrev = () => setActiveIndex(activeIndex - 1)
const slideNext = () => setActiveIndex(activeIndex + 1)
 
// Хук Effect

 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : items.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
  
  

  return (<div className={style.slide}>
    <div className={style.button} onClick={slidePrev}>Prev</div>
  <div className={style.sliders}>
    <div className={`${style.sliderImg} ${style.sliderImgPrev}`}
                key={prevImgIndex}>
            {items[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {
              items[activeIndex]
            }
        </div>
        <div className={`${style.sliderImg} ${style.sliderImgNext}`}
                key={nextImgIndex}>
            {items[nextImgIndex]}
        </div>
  </div>
    <div className={style.button} onClick={slideNext}>Next</div>
  </div>
  )
  }

export default SimpleSlider;

/*
     <div className={style.review}>
        <div className={style.reviewContainer}>
          <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
          <p>A really efficient way to make identify your plants. Recently Moz bed house and needed to identifying fy what was growing</p>
          <div className={style.man}>
            <img src={man} alt="" />
            <p>Michael Strickland</p>
          </div>
        </div>
      </div>

      <div className="item" data-value="5">5</div>,
*/