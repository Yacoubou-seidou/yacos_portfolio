import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
// import BookIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
// eslint-disable-next-line react/prop-types
const NavBar = ({ setCurrentLocation }) => {
  const [thePage, setThePage] = useState('')
  useEffect(() => {
    setCurrentLocation(thePage)
  }, [thePage, setCurrentLocation])
  return (
    <div className="navContent  col-3">
      <ul className="main-menu mt-3 ">
        <li className="">
          <NavLink to="/" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"
            }
          }}>
            <HomeIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text d-block">Home</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/about-me" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"
            }
          }}>
            <PersonIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">About Me</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/resume" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"
            }
          }}>
            <SchoolIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Resume</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/portfolio" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"
            }
          }}>
            <WorkIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Portfolio</span>
          </NavLink>
        </li>
        {/* <li className="">
          <NavLink to="/blog" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"}
          }}>
            <BookIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Blog</span>
          </NavLink>
        </li> */}
        <li className="">
          <NavLink to="/contact" className={({ isActive }) => {
            if (isActive) {
              const locationRequest = window.location.pathname;
              setThePage(locationRequest)
              return "active"
            }
          }}>
            <EmailIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
