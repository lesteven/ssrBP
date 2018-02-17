import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Index extends Component {

    render() {
        return "Hello world!";
    }
}

ReactDOM.render(<Index />, document.getElementById('index'));
