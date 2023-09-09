import './index.css'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ProjectGallery from './ProjectGallery';
import { useEffect } from 'react';
const ProjectDetails = ({ removeProjectDetail, projectDetail, nextProject, previewProject }) => {
  const animationsArray = ['animated-section-moveFromLeft', 'animated-section-moveToRight']
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  useEffect(() => {
    console.log(projectDetail);
  }, [projectDetail])
  return (
    projectDetail !== null ?
      <div id="ajax-page" className={`ajax-page-content animated-section ${result}`}>
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
              <div className="portfolio-page-video embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://player.vimeo.com/video/97102654?autoplay=0"
                />
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
                      <i className="fa fa-user" /> Alex Smith
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-globe" />{" "}
                      <a href="#" target="_blank">
                        www.project-site.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-calendar" /> 25 december, 2016
                    </p>
                  </li>
                </ul>
                <p className="text-justify">
                  Aliquam euismod aliquam massa, quis eleifend dui sodales vitae.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
                {/* /Project Description */}
                {/* Technology */}
                <div className="tags-block">
                  <div className="block-title">
                    <h3>Technology</h3>
                  </div>
                  <ul className="tags">
                    <li>
                      <a>HTML5</a>
                    </li>
                    <li>
                      <a>CSS3</a>
                    </li>
                    <li>
                      <a>jQuery</a>
                    </li>
                    <li>
                      <a>Ajax</a>
                    </li>
                    <li>
                      <a>PHP5</a>
                    </li>
                  </ul>
                </div>
                {/* /Technology */}
                {/* Share Buttons */}
                <div className="btn-group share-buttons">
                  <div className="block-title">
                    <h3>Share</h3>
                  </div>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-facebook-f" />{" "}
                  </a>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-twitter" />{" "}
                  </a>
                  <a href="#" target="_blank" className="btn">
                    <i className="fab fa-dribbble" />{" "}
                  </a>
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
