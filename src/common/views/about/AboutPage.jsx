import React, { Component } from 'react';
import styles from './css/aboutPage.css';
import data from './data';
class AboutPage extends Component {
  render() {
    return (
      <div className = 'about-me'>
        <h2> Anonymous </h2>
        { data.map((each, index) => 
          <p key = { index }> { each } </p> ) }        
      </div>  
    )
  }
}

export default AboutPage;
