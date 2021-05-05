import React from 'react' 
import ReactDOM from 'react-dom'


import App from './App.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <App />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
