import React, { Component } from 'react';
import style from '../css/contactForm.css';

class ContactForm extends Component {
  render() {
  const { submit } = this.props;
    return (
      <>
        <form className = 'contact-form' onSubmit = { submit }>
          <fieldset className = 'name'>
            <p> Name* </p>
            <div className = 'name-div'>
              <label>
                <input type = 'text' name = 'firstName' /> 
                <p>First Name</p>
              </label>
              <label>
              <input type = 'text' name = 'lastName' /> 
                <p>Last Name</p>
              </label>
            </div>
          </fieldset>
          <label>  
            <p> Email Address* </p>
            <input type = 'text' name = 'email' /> 
          </label>
          <label>
            <p> Subject* </p>
            <input type = 'text' name = 'subject' /> 
          </label>
          <label>
            <p> Message* </p>
            <textarea rows = '10' name = 'message'/>
          </label>
          <input type = 'submit' name = 'submit' id = 'submit'/>
        </form>
      </>
    )
  }
}




export default ContactForm;
