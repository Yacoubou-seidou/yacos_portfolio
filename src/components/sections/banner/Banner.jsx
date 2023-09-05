import './banner.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Banner = () => {
  const messages = ['Backend-developer', 'Frontend-developer']
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    className: 'slidderText',
  };
  return (
    <div className="section-content vcentered">
      <div className="row">
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

    </div>
  )
}

export default Banner
