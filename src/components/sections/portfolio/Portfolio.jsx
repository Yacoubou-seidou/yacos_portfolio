import { useEffect, useState } from 'react';
import { animationsArray } from '../../../data/animations';
import ProjectList from '../../ui/ProjectList';
import ProjectDetails from '../../ui/ProjectDetails';
import './portfolio.css'
const Portfolio = () => {
  const [projectDetail, setProjectDetail] = useState(null)
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  const handleProjectDetail = (project) => {
    setProjectDetail(project)
  }
  const removeProjectDetail = () => {
    setProjectDetail(null)
  }
  useEffect(() => {
    console.log(projectDetail);
  }, [projectDetail])
  return (
    projectDetail === null ? <section data-id="portfolio" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>

      <div className="section-content">

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="portfolio-content">

              <ul className="portfolio-filters">
                <li className="active">
                  <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="category_detailed">Detailed</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="category_mockups">Mockups</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="category_soundcloud">SoundCloud</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="category_vimeo-videos">Vimeo Videos</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="category_youtube-videos">YouTube Videos</a>
                </li>
              </ul>
              <div className="portfolio-grid col-12 three-columns">
                <ProjectList handleProjectDetail={handleProjectDetail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section > : <ProjectDetails removeProjectDetail={removeProjectDetail} projectDetail={projectDetail} />
  )
}

export default Portfolio
