import React from 'react'
import Slider from 'react-slick'
import style from './DownloadPage.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SimpleSlider(props) {

  const screenWidth = window.screen.width
let slideWidth = 3

if (screenWidth > 1024) {
  slideWidth = 3
}
else if (screenWidth <= 1024 && screenWidth > 638) {
  slideWidth = 2
}
else if (screenWidth <= 638) {
  slideWidth = 1
}

let sliders = props.items.map(slide => <div key={slide.id} className={style.review}>
<div className={style.reviewContainer}>
        <div className={style.starContainer}>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div>
          <div className={style.star}></div></div>
        <p>{slide.text}</p>
        <div className={style.man}>
          <img src={slide.img} alt="" />
          <p>{slide.name}</p>
        </div>
      </div>
</div>)

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slideWidth,
  slidesToScroll: 1,
  cssEase: 'linear'
}



  return (
    <div className={style.sliders}>
   
        <div className={style.sliderImg}>
        <Slider {...settings} >
          {sliders}
    </Slider>
        </div>
       
  </div>
   
  )
}

export default SimpleSlider
