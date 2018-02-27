import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update } from './reduxModules/viewModule';
import NavBar from './views/navBar/NavBar.jsx';
import routesOptions from './routes.js';
import { Route, Link, Switch, withRouter } from 'react-router-dom';



class App extends Component {
    hello = () => {
        console.log('hello from react!');

    }
    render() {
        const reactRoutes = routesOptions.routes.map (e =>
            <Route exact = { e.exact } path = { e.path } 
                component = { e.component } key = { e.path} />
        )
        return (
            <Fragment>
                <NavBar />
                <Switch>
                    { reactRoutes }
                </Switch>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view:state.view
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addOne:() => dispatch(update())
    }
}

// use withRouter to pass location to App
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


