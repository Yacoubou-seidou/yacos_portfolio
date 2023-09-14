import profileImage from '../../../images/yacosprofile.jpg'
import SocialLinks from '../../../ui/SocialLinks'
import './profile.css'
const Profile = () => {
  return (
    <div className="header-content col-9">
      <div className="header-photo">
        <img src={profileImage} className='profileImage' alt="Yacos" width="100%" />
      </div>
      <div className="header-titles">
        <h2>Yacoubou Seidou</h2>
        <h4>Full Stack Web Developer</h4>
      </div>
      <SocialLinks />
      <div className="header-buttons">
        <a href="https://docs.google.com/document/d/1oyBl8ib_NCnPd1oH9wOLYgOMFfhfqOAKIjjnNoTyWbg/edit?usp=sharing" target="_blank" rel='noreferrer' className="btn">Download CV</a>
      </div>
      <div className="copyrights">© 2020 All rights reserved.</div>
    </div>
  )
}

export default Profile
