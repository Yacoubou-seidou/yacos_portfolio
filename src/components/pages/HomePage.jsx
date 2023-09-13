import './homePage.css'
import './animations.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../sections/header/Header'
import Banner from '../sections/banner/Banner'
import Contact from '../sections/contact/Contact';
import About from '../sections/about/About';
// import Blog from '../sections/blog/Blog';
import Resume from '../sections/resume/Resume';
import Portfolio from '../sections/portfolio/Portfolio';
// import MobileMenu from '../sections/header/MobileMenu';


const RoundAbout = () => {
  return (
    <section id='animatedSectionMain' className="content col-8 animated-sections">
      <Outlet />
    </section>
  )
}

const HomePage = () => {
  return (
    <div className='homePage d-flex justify-content-start '>
      <div id='theMainHeader' className="headerSection col-4">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<RoundAbout />}>
          <Route path="/" element={<Banner />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default HomePage
