import './contact.css'
import { animationsArray } from '../../../data/animations';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Contact = () => {
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  return (
    <section data-id="contact" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>Contact</h2>
      </div>

      <div className="section-content col-12">

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="lm-info-block gray-default">
              <LocationOnIcon sx={{ fontSize: 35 }} className='contact_icon' />
              <h4>Niamey</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-phone-handset"></i>
              <LocalPhoneIcon sx={{ fontSize: 35 }} className='contact_icon' />
              <h4>+227 93 03 95 28</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <MailIcon sx={{ fontSize: 35 }} className='contact_icon' />
              <h4>yacoseidou@gmail.com</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-checkmark-circle"></i>
              <CheckCircleOutlineIcon sx={{ fontSize: 35 }} className='contact_icon' />
              <h4>Freelance Available</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>


          </div>

          <div className="col-xs-12 col-sm-8">
            <div id="map" className="map">
              <div className="lmpixels-map">
                <iframe scrolling="no" marginHeight="0" marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124139.81305299627!2d2.0366314787355506!3d13.512922304754758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d0756cc0ddfc65%3A0x81ce4bafda77b74e!2sNiamey!5e0!3m2!1sfr!2sne!4v1694164127816!5m2!1sfr!2sne"></iframe>
              </div>
            </div>
            <div className="block-title">
              <h3>How Can I <span>Help You?</span></h3>
            </div>

            <form id="contact_form" className="contact-form" action="contact_form/contact_form.php" method="post">

              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix contact_element">
                  <div className="left-column col-5">
                    <div className="form-group form-group-with-icon">
                      <input id="form_name" type="text" name="name" className="form-control" placeholder=""
                        required="required" data-error="Name is required." />
                      <label>Full Name</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input id="form_email" type="email" name="email" className="form-control" placeholder=""
                        required="required" data-error="Valid email is required." />
                      <label>Email Address</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group form-group-with-icon">
                      <input id="form_subject" type="text" name="subject" className="form-control" placeholder=""
                        required="required" data-error="Subject is required." />
                      <label>Subject</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="right-column col-6">
                    <div className="form-group form-group-with-icon">
                      <textarea id="form_message" name="message" className="form-control col-12" placeholder="" rows="7"
                        required="required" data-error="Please, leave me a message."></textarea>
                      <label>Message</label>
                      <div className="form-control-border"></div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <input type="submit" className="button btn-send" value="Send message" />
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
