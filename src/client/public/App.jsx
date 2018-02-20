import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


class App extends Component {
    hello = () => {
        console.log('hello from react!');

    }
    render() {
        this.hello();
    console.log(this.props);
        return (
            <div>
                <button onClick = {this.hello}>Click</button>
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
export default connect(mapStateToProps, null)(App);


