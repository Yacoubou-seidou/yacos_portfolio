import { useEffect, useState } from 'react';
import { animationsArray } from '../../../data/animations';
import { projects } from '../../../data/Projects';
import ProjectList from '../../ui/ProjectList';
import ProjectDetails from '../../ui/ProjectDetails';
import './portfolio.css'
const Portfolio = () => {
  const [projectDetail, setProjectDetail] = useState(null)
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  const [profileEl, setProfileEl] = useState(null)
  const [containerAnime, setContainerAnime] = useState(null)
  useEffect(() => {
    const element = document.getElementById('theMainHeader');
    const container = document.getElementById('animatedSectionMain');
    if (element) {
      setProfileEl(element)
    }
    if (container) {
      setContainerAnime(container)
    }
  }, [profileEl, containerAnime])
  const handleProjectDetail = (project) => {
    setProjectDetail(project)
  }
  const removeProjectDetail = () => {
    profileEl.style.display = 'block'
    containerAnime.classList.remove('col-12')
    containerAnime.classList.add('col-8')
    containerAnime.classList.remove('p-0')
    setProjectDetail(null)
  }
  const nextProject = () => {
    if (projectDetail && projectDetail.id > 0) {
      if (projectDetail.id === projects.length) {
        return
      }
      if (projectDetail.id > projects.length) {
        return
      }
      if (projectDetail.id < projects.length) {
        setProjectDetail(projects[projectDetail.id])
        return
      }
    }
  }
  const previewProject = () => {
    if (projectDetail && projectDetail.id > 0) {
      if (projectDetail.id === 1) {
        return
      }
      if (projectDetail.id === projects.length) {
        setProjectDetail(projects[projects.length - 2])
        return
      }
      if (projectDetail.id < projects.length && projectDetail.id > 0) {
        setProjectDetail(projects[projectDetail.id - 2])
        return
      }
    }
  }
  return (
    projectDetail === null ? <section data-id="portfolio" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>

      <div className="section-content">

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="portfolio-content">
              <div className="portfolio-grid col-12 three-columns">
                <ProjectList handleProjectDetail={handleProjectDetail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section > : <ProjectDetails
      removeProjectDetail={removeProjectDetail}
      projectDetail={projectDetail}
      nextProject={nextProject}
      previewProject={previewProject}
    />
  )
}

export default Portfolio
