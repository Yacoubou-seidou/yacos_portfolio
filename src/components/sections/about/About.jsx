import './main.css'
import Carousel from 'react-bootstrap/Carousel';
import { testimonials } from '../../../data/testimonials';
import { animationsArray } from '../../../data/animations';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DevicesIcon from '@mui/icons-material/Devices';
import DnsIcon from '@mui/icons-material/Dns';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const About = () => {

  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  return (
    <section id="about-me" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>About <span>Me</span></h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>Hi, my name is Yacoubou Seidou, also known as Yacos. I am a web developer from Niger, with a strong foundation in MERN stack web development learned at Codeloccol and Ruby on Rails learned at Micorverse. I am passionate about creating robust, user-friendly web applications with more than 3 years of experience. I Work on many projects built with MERN and Ruby on Rails stacks.</p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Age</span>
                  <span className="value">30</span>
                </li>

                <li>
                  <span className="title">Residence</span>
                  <span className="value">Niger</span>
                </li>

                <li>
                  <span className="title">Address</span>
                  <span className="value">Niamey, Sadoré</span>
                </li>

                <li>
                  <span className="title">e-mail</span>
                  <span className="value">yacoseidou@gmail.com</span>
                </li>

                <li>
                  <span className="title">Phone</span>
                  <span className="value">+0123 123 456 789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="white-space-50"></div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>What <span>I Do</span></h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <StorefrontIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                      amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <DevicesIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Front-end Developement</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                      amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <DnsIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Back-end Developement</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                      amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <AssignmentIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Project Management</h4>
                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit
                      amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-space-30"></div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Testimonials</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="testimonials row">
              <Carousel controls={false} pause='hover'>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={testimonial + index} >

                    <div className="testimonial">
                      <div className="img">
                        <img src={testimonial.image} alt={testimonial.author} />
                      </div>
                      <Carousel.Caption>
                        <div className="text">
                          <p>{testimonial.text}</p>
                        </div>

                        <div className="author-info">
                          <h4 className="author">{testimonial.author}</h4>
                          <h5 className="company">{testimonial.company}</h5>
                          <div className="icon">
                            <FormatQuoteIcon sx={{ fontSize: 42 }} className='quoteIcon' />
                          </div>
                        </div>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>


        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Cilents</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="clients owl-carousel">

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-1.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-2.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-3.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-4.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-5.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-6.png" alt="Logo" />
                </a>
              </div>

              <div className="client-block">
                <a href="#" target="_blank" title="Logo">
                  <img src="img/clients/client-7.png" alt="Logo" />
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">

            <div className="block-title">
              <h3>Pricing</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className=" col-xs-12 col-sm-12 ">
            <div className="fw-pricing clearfix row">

              <div className="fw-package-wrap col-md-6 ">
                <div className="fw-package">
                  <div className="fw-heading-row">
                    <span>Silver</span>
                  </div>

                  <div className="fw-pricing-row">
                    <span>$64</span>
                    <small>per month</small>
                  </div>

                  <div className="fw-button-row">
                    <a href="#" target="_self" className="btn btn-secondary">Free Trial</a>
                  </div>

                  <div className="fw-default-row">Lorem ipsum dolor</div>
                  <div className="fw-default-row">Pellentesque scelerisque</div>
                  <div className="fw-default-row">Morbi eu sagittis</div>
                </div>
              </div>

              <div className="fw-package-wrap col-md-6 highlight-col ">
                <div className="fw-package">
                  <div className="fw-heading-row">
                    <span>Gold</span>
                  </div>

                  <div className="fw-pricing-row">
                    <span>$128</span>
                    <small>per month</small>
                  </div>

                  <div className="fw-button-row">
                    <a href="#" target="_self" className="btn btn-primary">Free Trial</a>
                  </div>

                  <div className="fw-default-row">Lorem ipsum dolor</div>
                  <div className="fw-default-row">Pellentesque scelerisque</div>
                  <div className="fw-default-row">Morbi eu sagittis</div>
                  <div className="fw-default-row">Donec non diam</div>
                  <div className="fw-default-row"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">

            <div className="block-title">
              <h3>Fun <span>Facts</span></h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-heart"></i>
              <h4>Happy Clients</h4>
              <span className="fun-fact-block-value">578</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-clock"></i>
              <h4>Working Hours</h4>
              <span className="fun-fact-block-value">4,780</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 ">
            <div className="fun-fact gray-default">
              <i className="lnr lnr-star"></i>
              <h4>Awards Won</h4>
              <span className="fun-fact-block-value">15</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
