import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'react-dom';


class App extends Component {

    render() {
        return "Hello world!";
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

//hydrate(<App />, document.getElementById('app'))
