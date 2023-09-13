import { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import Profile from './profile/Profile'
import './header.css'
const Header = () => {
  const [currentLocation, setCurrentLocation] = useState(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (currentLocation) {
      setOpen(false)
    }
  }, [currentLocation])
  return (
    <>
      <header id="site_header" className={!open ? "header mobile-menu-hide d-flex justify-content-between" : "header animate"}>
        <NavBar setCurrentLocation={setCurrentLocation} />
        <Profile />

      </header>
      <div className={open ? "menu-toggle open" : "menu-toggle"} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>

  )
}

export default Header
