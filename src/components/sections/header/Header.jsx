import NavBar from './navbar/NavBar'
import Profile from './profile/Profile'

import './header.css'
const Header = () => {
  return (
    <header id="site_header" className="header mobile-menu-hide d-flex justify-content-between">
      <NavBar />
      <Profile />
    </header>
  )
}

export default Header
