import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'styles/App.css';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Application />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
