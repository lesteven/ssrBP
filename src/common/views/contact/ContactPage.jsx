import React, { Component } from 'react';
import ContactForm from './components/ContactForm';

class ContactPage extends Component {
  submit = (e) => {
    e.preventDefault();
    console.log('clicked');
  }
  render() {
    return (
      <>
        <h2> Contact Us</h2>
        <ContactForm submit = { this.submit }/>
      </>
    )
  }
}




export default ContactPage;
