import './banner.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { animationsArray } from '../../../data/animations';
const Banner = () => {
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]

  const messages = ['Back-end Developer', 'Front-end Developer']
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
    className: 'slidderText',
  };
  return (
    <div className={`section-content vcentered animated-section ${result}`}>
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="title-block">
          <h2>Yacoubou Seidou</h2>
          <div className="col-12">
            <Slider {...settings}>
              {messages.map((message, index) => (
                <div key={message + index} className="item">
                  <div className="sp-subtitle">{message}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Banner
