import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import {ConnectedRouter as Router} from 'react-router-redux';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import history from './history';
import App from './App';
import {initAuth} from './modules/auth/auth';
import amber from '@material-ui/core/es/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: amber,
  },
});

function render() {
  ReactDOM.render((
// eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  ), document.getElementById('root'));
}

initAuth(store.dispatch)
  .then(() => {
    render();
  })
  .catch(error => console.error(error));

registerServiceWorker();

