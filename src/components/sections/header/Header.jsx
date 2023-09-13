import { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import Profile from './profile/Profile'
import './header.css'
const Header = () => {

  const [open, setopen] = useState(false)
  useEffect(() => {
    const currentLocation = window.location.pathname;
    if (currentLocation) {
      setopen(false)
    }
  }, [])
  return (
    <>
      <header id="site_header" className={!open ? "header mobile-menu-hide d-flex justify-content-between" : "header animate"}>
        <NavBar />
        <Profile />

      </header>
      <div className={open ? "menu-toggle open" : "menu-toggle"} onClick={() => setopen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>

  )
}

export default Header
