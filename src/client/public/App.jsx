import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { update } from '../../common/reduxModules/viewModule';


class App extends Component {
    hello = () => {
        console.log('hello from react!');

    }
    render() {
    this.hello();
        return (
            <div>
                <button onClick = {this.props.addOne}>Click</button>
            <p>{this.props.view.count}</p>
            "Hello Universal React!"
            </div>
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


