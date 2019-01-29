import React from 'react';
import { withStyles} from '@material-ui/core';
import {compose} from 'recompose';
import Loader from '../Loader/Loader';
import {Fade} from "../../transitions/Fade";
import If from '../If/If';

const ViewLoader = ({isLoading,children,classes}) => (
  <div className={classes.root}>
    <If value={!isLoading()}>
      <Loader />
    </If>
    <Fade in={isLoading()}>
      {children}
    </Fade>
  </div>

)

const styles = () => ({
  root: {
    maxWidth: '90%',
    margin: '20px auto',
  }
});

export default compose(
  withStyles(styles),
)(ViewLoader);
