import './contact.css'
import { animationsArray } from '../../../data/animations';
const Contact = () => {
  const result = animationsArray[(Math.floor(Math.random() * animationsArray.length))]
  return (
    <section data-id="contact" className={`animated-section ${result}`}>
      <div className="page-title">
        <h2>Contact</h2>
      </div>

      <div className="section-content">

        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="lm-info-block gray-default">
              <i className="lnr lnr-map-marker"></i>
              <h4>San Francisco</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-phone-handset"></i>
              <h4>415-832-2000</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <h4><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                data-cfemail="4b2a272e330b2e332a263b272e65282426">[email&#160;protected]</a></h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>


          </div>

          <div className="col-xs-12 col-sm-8">
            <div id="map" className="map">
              <div className="lmpixels-map">
                <iframe scrolling="no" marginHeight="0" marginWidth="0"
                  src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"></iframe>
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
