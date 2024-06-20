import {useRef} from 'react'

import emailjs from 'emailjs-com'
import './Contacts.scss'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('0nWU47PHBhydPE1ZZ', 'template_owdpahc', form.current, 'R32XbqQuniMZvgjwihI-I');
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
