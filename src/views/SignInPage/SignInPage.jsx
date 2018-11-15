import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {Button, Dialog, DialogTitle, Grid, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import {FacebookIcon} from '../../ui-elements/icons';
import {firebaseConnect} from 'react-redux-firebase';

class SignInPage extends React.Component{
    facebookAuth(){
      this.props.firebase.login({
        provider: 'facebook',
        type: 'popup'
      })
    }
    render(){
        return (
          <Dialog open={true}>
              <DialogTitle>Sign in</DialogTitle>
              <div className={this.props.classes.signInDialog}>
                  <Button onClick={() => {this.facebookAuth()}} className={this.props.classes.buttonFacebook}>
                      <FacebookIcon style={{
                        width: 30,
                        height: 30,
                        paddingRight: 20,
                      }}
                      /> Login with Facebook
                  </Button>
              </div>
          </Dialog>
        );
    }
}

const styles = () => ({
    buttonFacebook: {
        backgroundColor: '#3b5998',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#3b5998',
        },
    },
    signInDialog: {
        padding: 20
    }
});
export default compose(
    withStyles(styles),
    firebaseConnect()
)(SignInPage);

