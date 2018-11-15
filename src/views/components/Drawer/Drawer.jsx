import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleDrawer } from '../../../modules/interface/actions';
import { signOut } from '../../../modules/auth/actions';
import {compose} from 'recompose';
import {FoodIcon, WrenchIcon} from "../../../ui-elements/icons";
import DrawerUserInfo from "./DrawerUserInfo";
import {push} from 'react-router-redux';


const MenuDrawer = props => {
  return (<Drawer
      open={props.drawerOpen}
      onRequestClose={() => props.toggleDrawer()}>
    <DrawerUserInfo user={props.user} />
    <List>
      <ListItem button onClick={() => { props.push('/'); props.toggleDrawer(); }}>
        <ListItemIcon>
          <FoodIcon />
        </ListItemIcon>
        <ListItemText primary="My lists" />
      </ListItem>
      {/*<ListItem button onClick={() => {  props.toggleDrawer(); }}>
        <ListItemIcon>
          <WrenchIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>*/}
      <ListItem button onClick={() => { props.signOut(); props.toggleDrawer(); }}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>

    </List>
  </Drawer>)
};


const mapStateToProps = state => ({ drawerOpen: state.interface.drawerOpen, user: state.auth.toJS() });

const mapDispatchToProps = {
  toggleDrawer,
  signOut,
  push
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
) (MenuDrawer)
