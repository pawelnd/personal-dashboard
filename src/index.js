import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import history  from './history'
import amber from '@material-ui/core/es/colors/amber';
import { ConnectedRouter } from 'connected-react-router'
import App from "./App.jsx";


const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: amber,
  },
});

(function render() {
        ReactDOM.render((
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider theme={theme}>
                        <App />
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        ), document.getElementById('root'));
    }
)();

registerServiceWorker();

