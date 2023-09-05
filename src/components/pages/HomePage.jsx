import './homePage.css'
import Header from '../sections/header/Header'
import Banner from '../sections/banner/Banner'
const HomePage = () => {
  return (
    <div className='homePage d-flex justify-content-start '>
      <div className="headerSection col-4">
        <Header />
      </div>
      <div className="content col-8">
        <section data-id="home" className="animated-section start-page">
          <Banner />
        </section>
      </div>
    </div>
  )
}

export default HomePage
