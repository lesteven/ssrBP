import React, { Component, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import routesOptions from '../../routes.js';


class NavBar extends Component {


    render() {
    const links = routesOptions.routes.map (e =>
        <Link to = { e.path } key = { e.path }>{e.title}</Link>
    )
    const reactRoutes = routesOptions.routes.map (e =>
        <Route exact = { e.exact } path = { e.path } 
            component = { e.component } key = { e.path} />
    )
        return (
            <Fragment>
                <nav>
                    { links }
                </nav>
                <Switch>
                    { reactRoutes }
                </Switch>
            </Fragment>
        )
    }
}


export default NavBar;
