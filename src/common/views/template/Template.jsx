import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

class Template extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className = 'max-width-two'>
          <div className = 'page-wrapper'>
            { this.props.children }
          </div>
        </div>
        <div className = 'bottom'></div>
      </Fragment>
    )
  }  
}

export default Template;
