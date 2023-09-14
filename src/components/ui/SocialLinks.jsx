import './index.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const SocialLinks = () => {
  return (
    <div className="social-links">
      <ul>
        <li><a href="https://www.linkedin.com/in/yacoubou-seidou-chaibou/" rel='noreferrer' target="_blank"><LinkedInIcon /></a></li>
        <li><a href="https://www.facebook.com/Blackyacos.chaibou" target="_blank" rel='noreferrer'><FacebookIcon /></a></li>
        <li><a href="https://github.com/Yacoubou-seidou" target="_blank" rel='noreferrer'><GitHubIcon /></a></li>
      </ul>
    </div>
  )
}

export default SocialLinks
