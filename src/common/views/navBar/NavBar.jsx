import React, { Component, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import routesOptions from '../../routes.js';
import { BrowserRouter as Router } from 'react-router-dom';


class NavBar extends Component {


    render() {
        const links = routesOptions.routes.map (e =>
            <Link to = { e.path } key = { e.path }>{e.title}</Link>
        )
        return (
            <nav>
                { links }
            </nav>
        )
    }
}


export default NavBar;
