import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import style from './DownloadPage.module.css'
import man from '../../assets/img/man1.png'

export default function SimpleSlider() {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return (
    <Swiper spaceBetween={-40}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className={style.review}>
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
      </SwiperSlide>
      <SwiperSlide><div className={style.review}>
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
      </SwiperSlide>
      <SwiperSlide><div className={style.review}>
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
      </SwiperSlide>
      <SwiperSlide><div className={style.review}>
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
      </SwiperSlide>
      
      ...
    </Swiper>
  );
}

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
*/