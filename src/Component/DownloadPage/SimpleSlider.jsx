import React from 'react'
import Slider from 'react-slick'
import style from './DownloadPage.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: "",
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear'
      }
    };
  }

  handleResize = e => {
    const windowSize = window.innerWidth;

    if (windowSize > 1200) {
      this.setState((state, props) => ({
        windowSize,
        settings: { ...state.settings, slidesToShow: 3 }
      }));
    }
    else if (windowSize <= 1200 && windowSize > 846) {
      console.log(windowSize)
      this.setState((state, props) => ({
        windowSize,
        settings: { ...state.settings, slidesToShow: 2 }
      }));
    }
    else if (windowSize < 846) {
      console.log(windowSize)
      this.setState((state, props) => ({
        windowSize,
        settings: { ...state.settings, slidesToShow: 1 }
      }));
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  sliders = this.props.items.map(slide => <div key={slide.id} className={style.review}>
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

  render() {
    return (
      <div className={style.sliders}>

        <div className={style.sliderImg}>
          <Slider {...this.state.settings} >
            {this.sliders}
          </Slider>
        </div>

      </div>
    );
  }
}

export default SimpleSlider
