import './index.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li><a href="#/" target="_blank"><LinkedInIcon /></a></li>
        <li><a href="#/" target="_blank"><FacebookIcon /></a></li>
        <li><a href="#/" target="_blank"><GitHubIcon /></a></li>
      </ul>
    </div>
  )
}

export default SocialLinks
