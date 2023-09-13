import './main.css'
import Carousel from 'react-bootstrap/Carousel';
import { testimonials } from '../../../data/testimonials';
import { animationsArray } from '../../../data/animations';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DevicesIcon from '@mui/icons-material/Devices';
import DnsIcon from '@mui/icons-material/Dns';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import WorkIcon from '@mui/icons-material/Work';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FolderZipIcon from '@mui/icons-material/FolderZip';
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
                    <p>I specialize in creating stunning e-commerce websites that not only look great but also drive sales. My expertise in user experience design and seamless checkout processes ensures a delightful shopping experience for your customers.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <DevicesIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Front-end Development</h4>
                    <p>Front-end development is my passion. I craft responsive and pixel-perfect websites that engage users and bring your brand to life. From HTML and CSS to JavaScript frameworks, I&apos;ve got it all covered.</p>
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
                    <h4>Back-end Development</h4>
                    <p>I&apos;m well-versed in back-end development, ensuring that your website&apos;s functionality is robust and secure. From database design to server-side scripting, I create the backbone of your digital presence.</p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <AssignmentIcon sx={{ fontSize: 42 }} className='doIcons' />
                  </div>
                  <div className="ci-text">
                    <h4>Project Management</h4>
                    <p>Effective project management is key to the success of any digital endeavor. I bring a wealth of experience in organizing and executing projects, ensuring they are completed on time and within budget.</p>
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
              <h3>Fun <span>Facts</span></h3>
            </div>
          </div>
        </div>

        <div className="row about_container">
          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <WorkIcon sx={{ fontSize: 35 }} className="lnr lnr-heart" />
              <h4>Projects</h4>
              <span className="fun-fact-block-value">100+</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4">
            <div className="fun-fact gray-default">
              <AccessAlarmIcon sx={{ fontSize: 35 }} className="lnr lnr-clock" />
              <h4>Working Hours</h4>
              <span className="fun-fact-block-value">4,200+</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 ">
            <div className="fun-fact gray-default">
              <FolderZipIcon sx={{ fontSize: 35 }} className="lnr lnr-heart" />
              <h4>Packages</h4>
              <span className="fun-fact-block-value">4</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
