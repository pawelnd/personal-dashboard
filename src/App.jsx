import './App.scss';
import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import {Component} from 'react';
import SignInPage from './views/SignInPage/SignInPage';
import {PrivateRoute} from "./views/components/PrivateRoute/PrivateRoute";


let auth = () => <div>AUTH</div>;
let nauth = () => <div>nAUTH</div>;




let App = () => (
    <div>
        <Route path="/login" component={SignInPage} />
        <PrivateRoute
            authenticated={false}
            exact
            path="/"
            component={auth}
        />
    </div>
);

export default App;

