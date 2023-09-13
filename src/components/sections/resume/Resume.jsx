import { animationsArray } from '../../../data/animations';
import './resume.css'
const Resume = () => {
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  return (
    <section data-id="resume" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>Resume</h2>
      </div>

      <div className="section-content">

        <div className="row">
          <div className="col-xs-12 col-sm-7">

            <div className="block-title">
              <h3>Education</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2022</h5>
                  <span className="item-company">Codeloccol</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Full-stack MERN Development</h4>
                  <p>During my time at Codeloccol in 2022, I delved deep into Full-stack MERN Development. I had the opportunity to work on exciting projects, utilizing MongoDB, Express.js, React.js, and Node.js to build robust and dynamic web applications. This experience honed my skills in creating seamless user experiences and scalable back-end systems that are at the forefront of modern web development.</p>
                </div>
              </div>
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2023</h5>
                  <span className="item-company">Microverse</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Remote Full Stack Web Development Program</h4>
                  <p>In 2023, I enrolled in the prestigious Remote Full Stack Web Development Program at Microverse. During this intensive program, I acquired comprehensive knowledge and hands-on experience in web development. I honed my skills in both front-end and back-end technologies, collaborated with global peers, and gained the ability to build fully functional web applications. This program has been instrumental in shaping my career as a Full Stack Developer.</p>
                </div>
              </div>

            </div>

            <div className="white-space-50"></div>

            <div className="block-title">
              <h3>Experience</h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2023 - Current</h5>
                  <span className="item-company">Microverse & Codeloccol</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">
                    Mentor</h4>
                  <p>Mentored junior web developers, providing technical support through code reviews.
                    Proposed improvements to code organization to improve code quality and overall performance.
                    Provided advice and tips on how to maintain motivation to maintain longevity in the program.</p>
                </div>
              </div>
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2022 - Current</h5>
                  <span className="item-company">Freelance</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">
                    Full Stack Software Developer</h4>
                  <p>Since 2022, I have been working as a freelance Full Stack Software Developer. During this period, I have had the privilege of collaborating with diverse clients and taking on a wide range of projects. I&apos;ve leveraged my expertise in both front-end and back-end development to create custom solutions that meet the unique needs of each client. This experience has allowed me to continuously expand my skill set and deliver high-quality, tailored software solutions.</p>
                </div>
              </div>
            </div>

          </div>


          <div className="col-xs-12 col-sm-5">

            <div className="block-title">
              <h3>Front-end <span>Tools</span></h3>
            </div>

            <div className="skills-info skills-second-style">

              <div className="skill clearfix">
                <h4>JavaScript</h4>
              </div>

              <div className="skill clearfix">
                <h4>React.js</h4>
              </div>

              <div className="skill clearfix">
                <h4>Redux.js</h4>
              </div>

              <div className="skill clearfix">
                <h4>HTML/CSS</h4>
              </div>
              <div className="skill clearfix">
                <h4>Electron.js</h4>
              </div>


            </div>


            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>Back-end <span>Tools</span></h3>
            </div>

            <div className="skills-info skills-second-style">

              <div className="skill clearfix">
                <h4>Node.js</h4>
              </div>

              <div className="skill clearfix">
                <h4>Ruby on Rails</h4>
              </div>

              <div className="skill clearfix">
                <h4>PostgreSQL</h4>
              </div>

              <div className="skill clearfix">
                <h4>MongoDB</h4>
              </div>
              <div className="skill clearfix">
                <h4>Express.js</h4>
              </div>
            </div>


            <div className="white-space-10"></div>
            <div className="block-title">
              <h3>Knowledges</h3>
            </div>

            <ul className="knowledges">
              <li>GitHub</li>
              <li>Data Structures</li>
              <li>Teamwork</li>
              <li>Agile</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Pair Programming</li>
              <li>Kanban</li>
              <li>Web Design</li>
              <li>Algorithms</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* <div className="white-space-50"></div>
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="block-title">
                <h3>Certificates</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src="img/clients/client-1.png" alt="logo" />
                </div>

                <div className="certi-content">
                  <div className="certi-title">
                    <h4>Psyhology of Intertnation Design</h4>
                  </div>
                  <div className="certi-id">
                    <span>Membership ID: XXXX</span>
                  </div>
                  <div className="certi-date">
                    <span>19 April 2018</span>
                  </div>
                  <div className="certi-company">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src="img/clients/client-1.png" alt="logo" />
                </div>

                <div className="certi-content">
                  <div className="certi-title">
                    <h4>Psyhology of Intertnation Design</h4>
                  </div>
                  <div className="certi-id">
                    <span>Membership ID: XXXX</span>
                  </div>
                  <div className="certi-date">
                    <span>19 April 2018</span>
                  </div>
                  <div className="certi-company">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Resume
