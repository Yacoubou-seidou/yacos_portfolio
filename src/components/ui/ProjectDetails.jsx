import './index.css'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProjectGallery from './ProjectGallery';
import { useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GitHubIcon from '@mui/icons-material/GitHub';
import TechList from './TechList';
const ProjectDetails = ({ removeProjectDetail, projectDetail, nextProject, previewProject }) => {
  const animationsArray = ['animated-section-moveFromLeft', 'animated-section-moveToRight']
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  useEffect(() => {
    const element = document.getElementById('theMainHeader');
    const container = document.getElementById('animatedSectionMain');
    if (element) {
      element.style.display = 'none'
    }
    if (container) {
      container.classList.remove('col-8')
      container.classList.add('col-12')
      container.classList.add('p-0')
    }
  }, [])
  return (
    projectDetail !== null ?
      <div id="ajax-page" className={`ajax-page-content animated-section p-0 ${result}`}>
        <div className="ajax-page-wrapper">
          <div className="ajax-page-nav">
            <div className="nav-item ajax-page-prev-next">
              <a className="ajax-page-load chevronleft" onClick={() => previewProject()}>
                <ChevronLeftIcon className='detail_icon' />
              </a>
              <a className="ajax-page-load" >
                <ChevronRightIcon className='detail_icon' onClick={() => nextProject()} />
              </a>
            </div>
            <div className="nav-item ajax-page-close-button">
              <a className="ajax-page-load" onClick={() => removeProjectDetail()}>
                <CloseIcon className='detail_icon' />
              </a>
            </div>
          </div>
          <div className="ajax-page-title">
            <h1>{projectDetail ? projectDetail.name : ''}</h1>
          </div>
          <div className="row">
            <div className="col-sm-8 col-md-8 portfolio-block">
              <div className="owl-carousel portfolio-page-carousel owl-loaded owl-drag">
                {projectDetail && projectDetail.images ? <ProjectGallery gallery={projectDetail.images} /> : ''}
              </div>
            </div>
            <div className="col-sm-4 col-md-4 portfolio-block">
              {/* Project Description */}
              <div className="project-description">
                <div className="block-title">
                  <h3>Description</h3>
                </div>
                <ul className="project-general-info">
                  <li>
                    <p>
                      <PersonIcon sx={{ fontSize: 25 }} className='details_icon' /> Yacoubou Seidou
                    </p>
                  </li>
                  <li>
                    <p>
                      <LanguageIcon sx={{ fontSize: 25 }} className='details_icon' /> {" "}
                      <a href={projectDetail.link} target="_blank" rel='noreferrer'>
                        Website
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <CalendarMonthIcon sx={{ fontSize: 25 }} className='details_icon' />  {projectDetail.date}
                    </p>
                  </li>
                </ul>
                <p className="text-justify">
                  {projectDetail.description}
                </p>
                {/* /Project Description */}
                {/* Technology */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Technology</h3>
                  </div>
                  <ul className="tags">
                    <TechList array={projectDetail.stack} />
                  </ul>
                </div>
                <div className="share-buttons">
                  <div className="block-title">
                    <h3>Code</h3>
                  </div>
                  {projectDetail.repo !== '' ? <a href={projectDetail.repo} rel='noreferrer' target="_blank" className="">
                    <GitHubIcon sx={{ fontSize: 35 }} className='code_icon' />
                  </a> : <p className='private_repo'>Private</p>}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      : '')
}
ProjectDetails.propTypes = {
  projectDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    private: PropTypes.bool.isRequired,
    repo: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

ProjectDetails.propTypes = {
  removeProjectDetail: PropTypes.func.isRequired,
};
ProjectDetails.propTypes = {
  previewProject: PropTypes.func.isRequired,
};
ProjectDetails.propTypes = {
  nextProject: PropTypes.func.isRequired,
};
export default ProjectDetails
