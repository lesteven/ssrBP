import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update } from './reduxModules/viewModule';
import NavBar from './views/navBar/NavBar.jsx';


class App extends Component {
    hello = () => {
        console.log('hello from react!');

    }
    render() {
    this.hello();
        return (
            <NavBar />
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
export default connect(mapStateToProps, mapDispatchToProps)(App);


