import React from 'react' 
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core'

import App from './App.js'

import theme from './theme.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
