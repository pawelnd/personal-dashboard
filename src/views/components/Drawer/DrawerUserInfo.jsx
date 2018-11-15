import React from 'react';
import {AppBar, Avatar, Typography, withStyles} from "@material-ui/core";
import {compose} from "recompose";

const DrawerUserInfo = ({user,classes}) => {
    return (<div className={classes.appBarContainer}>
            <Avatar src={`https://graph.facebook.com/${user.facebookID}/picture?type=square`} />
            <Typography className={classes.userInfoDisplayName} type="subheading">{user.displayName ? user.displayName : ''}</Typography>
            <Typography className={classes.userInfoEmail} type="subheading">{user.email ? user.email : ''}</Typography>
        </div>);
};

const styles = (theme) => {
    console.log(theme);
    return ({
        appBarContainer:{
            padding:10,
            width: '100%',
            backgroundColor: theme.palette.primary[800],
            boxSizing: 'border-box'
        },
        userInfoEmail:{
            color:theme.palette.common.lightWhite,
        },
        userInfoDisplayName:{
            color:theme.palette.common.fullWhite,
        }
    })
}
export default compose(withStyles(styles))(DrawerUserInfo);
