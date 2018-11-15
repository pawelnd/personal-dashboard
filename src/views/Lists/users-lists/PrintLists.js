import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import ListItem from './ListItem';
import { compose } from 'recompose';
import ViewLoader from '../../components/ViewLoader/ViewLoader';

const styles = () => ({
  item: {
    width: '200px',
  },
});


const ListsPrint = ({ lists, classes, doDelete, openDetailed }) => {
  const listCollection = !lists || (isEmpty(lists)) ? 'Todo list is empty' :
        Object.keys(lists).map((key) => (
          <Grid key={key} item md={4} sm={6} xs={12} className={classes.item}>
              <ListItem id={key} item={lists[key]} remove={() => doDelete(key)} open={openDetailed} />
          </Grid>
        ));
  return (
    <ViewLoader isLoading={() => isLoaded(lists)}>
      <Grid container spacing={24}>
        {listCollection}
      </Grid>
    </ViewLoader>
  );
};

export default compose(
    withStyles(styles),
)(ListsPrint);
