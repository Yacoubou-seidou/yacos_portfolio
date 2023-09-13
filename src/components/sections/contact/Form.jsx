import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
const Form = () => {
  const [state, handleSubmit] = useForm("xyyawdao");
  if (state.succeeded) {
    return <p className='Success_message'>Thanks for your message!</p>;
  }
  return (
    <form id="contact_form" className="contact-form" onSubmit={handleSubmit}>

      <div className="messages"></div>

      <div className="controls two-columns contactFormtwo-columns">
        <div className="fields clearfix contact_element">
          <div className="left-column col-5">
            <div className="form-group form-group-with-icon">
              <input id="form_name" type="text" name="name" className="form-control" placeholder=""
                required="required" data-error="Name is required." />
              <label htmlFor="name">Full Name</label>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group form-group-with-icon">
              <input id="form_email" type="email" name="email" className="form-control" placeholder=""
                required="required" data-error="Valid email is required." />
              <label htmlFor="email">Email Address</label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group form-group-with-icon">
              <input id="form_subject" type="text" name="subject" className="form-control" placeholder=""
                required="required" data-error="Subject is required." />
              <label htmlFor="subject">Subject</label>
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="right-column col-6">
            <div className="form-group form-group-with-icon">
              <textarea id="form_message" name="message" className="form-control col-12" placeholder="" rows="7"
                required="required" data-error="Please, leave me a message."></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="button btn-send">Send message</button>
      </div>
    </form>
  )
}

export default Form
