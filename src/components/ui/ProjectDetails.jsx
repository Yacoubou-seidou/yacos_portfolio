import './index.css'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect } from 'react';
const ProjectDetails = ({ removeProjectDetail, projectDetail, nextProject, previewProject }) => {

  useEffect(() => {
    console.log(projectDetail);
  }, [projectDetail])
  return (
    projectDetail !== null ?
      <div id="ajax-page" className="ajax-page-content">
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
                <div className="owl-stage-outer owl-height" style={{ height: 460 }}>
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1400px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 4900
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: 690, marginRight: 10 }}
                    >
                      <div className="item">
                        <img src="img/portfolio/full/2.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 690, marginRight: 10 }}
                    >
                      <div className="item">
                        <img src="img/portfolio/full/3.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: 690, marginRight: 10 }}
                    >
                      <div className="item">
                        <img src="img/portfolio/full/1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 690, marginRight: 10 }}>
                      <div className="item">
                        <img src="img/portfolio/full/2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 690, marginRight: 10 }}>
                      <div className="item">
                        <img src="img/portfolio/full/3.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 690, marginRight: 10 }}
                    >
                      <div className="item">
                        <img src="img/portfolio/full/1.jpg" alt="" />
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: 690, marginRight: 10 }}
                    >
                      <div className="item">
                        <img src="img/portfolio/full/2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev" />
                  <div className="owl-next" />
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                </div>
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
