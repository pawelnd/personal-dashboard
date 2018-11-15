import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Avatar, withStyles} from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAuth } from '../../../modules/auth/selectors';
import { toggleDrawer } from '../../../modules/interface/actions';
import { Fade } from '../../transitions/Fade';
import {compose} from "recompose";


const MenuAppBar = props => (<Fade in={!!props.authenticated}>
  <AppBar position="static">
    <Toolbar>
      <IconButton color="contrast" aria-label="Menu" onClick={() => props.toggleDrawer()}>
      </IconButton>
      <Typography type="title" className={props.classes.headerTitle}>
        Shopping list
      </Typography>
      <Avatar src={`https://graph.facebook.com/${props.facebookID}/picture?type=square`} />
    </Toolbar>
  </AppBar>
</Fade>);


MenuAppBar.propTypes = {
  facebookID: PropTypes.string,
};


const mapStateToProps = getAuth;

const mapDispatchToProps = {
  toggleDrawer,
};

const styles = {
  headerTitle:{
    flex: 1
  }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(MenuAppBar)
