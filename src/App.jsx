import './App.scss';
import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Component } from 'react';
import SignInPage from './views/SignInPage/SignInPage';
import { PrivateRoute } from './views/components/PrivateRoute/PrivateRoute';
import { connect } from 'react-redux';
import * as authActions from './modules/auth/actions';
import { getAuth } from './modules/auth/selectors';
import MenuBar from './views/components/MenuBar/MenuBar';
import Drawer from './views/components/Drawer/Drawer';
import ListDetails from './views/Lists/list-details/containers/ListDetails';
import ListsManagement from './views/Lists/users-lists/ListsManagement';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Drawer />
        <Route path="/login" component={SignInPage} />
        <PrivateRoute
          authenticated={this.props.authenticated}
          exact
          path="/"
          component={ListsManagement}
        />
        <PrivateRoute
          authenticated={this.props.authenticated}
          exact
          path="/list/:id"
          render={(props) => <ListDetails {...props} />}
          component={ListDetails}
        />
      </div>
    );
  }
}
const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(App),
);

