import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
const NavBar = () => {
  return (
    <div className="navContent  col-3">
      <ul className="main-menu mt-3 ">
        <li className="py-2">
          <a href="#home" className="nav-anim">
            <HomeIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text d-block">Home</span>
          </a>
        </li>
        <li className="py-2">
          <a href="#about-me" className="nav-anim">
            <PersonIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">About Me</span>
          </a>
        </li>
        <li className="py-2">
          <a href="#resume" className="nav-anim">
            <SchoolIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Resume</span>
          </a>
        </li>
        <li className="py-2">
          <a href="#portfolio" className="nav-anim">
            <WorkIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Portfolio</span>
          </a>
        </li>
        <li className="py-2">
          <a href="#blog" className="nav-anim">
            <BookIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Blog</span>
          </a>
        </li>
        <li className="py-2">
          <a href="#contact" className="nav-anim">
            <EmailIcon sx={{ fontSize: 35 }} className='menu-icon' />
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
