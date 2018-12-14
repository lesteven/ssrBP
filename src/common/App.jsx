import React, { Component } from 'react';
import styles from './views/sharedCss/app.css';
import { withRouter } from 'react-router-dom';
import routes from './routes';
import MappedRoutes from './views/genComps/MappedRoutes';
import Template from './views/template/Template';

class App extends Component {
  render() {
    return (
      <Template>
        <MappedRoutes routes = { routes.routes } />
      </Template>
    )
  }
}



export default App;
