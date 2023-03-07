import {useRef} from 'react'

import emailjs from 'emailjs-com'
import './Contacts.scss'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9fgxci6', 'template_owdpahc', form.current, 'Es-koJTOLJZw4Kt_W');
      e.target.reset();
    };

  return (
    <section id='contact' className='contact container section'>
      <div class="sectionTitle">
        <span class="titleNumber">04 . </span>  
        <h5 class="titleText">
          Contact
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer">
        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter your Name'  name='name'  required />
            <input type="email" placeholder='Enter Your Email'  name='name'  required/>
            <textarea name="message" placeholder='Enter your message'></textarea>
            <button className='formBtn' type='submit' name='submit'>Send Email</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact