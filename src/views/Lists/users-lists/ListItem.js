import React from 'react';
import { Card, CardActions, CardContent, IconButton, Typography, withStyles } from '@material-ui/core';
import { BookOpenIcon, ShareIcon, TrashIcon } from '../../../ui-elements/icons';
import { compose } from 'recompose';
import {isEmpty} from "react-redux-firebase";

const styles = () => ({
  listContent: {
    cursor: 'pointer',
  },
});

const ListItem = ({item, classes, open, remove, id}) => {
    const itemsCollection = !item.items || item.items.length === 0 ? 'List is empty' :
        Object.keys(item.items).map((key) => (
            <li key={key}>
                {item.items[key].text}
            </li>
        ));
  return (
    <Card>
      <CardContent className={classes.listContent} onClick={() => open(id)}>
      <Typography type="title"> {item.name}</Typography>
      <ul>
          {itemsCollection}
      </ul>
    </CardContent>
      <CardActions>
        <IconButton aria-label="Open" onClick={() => open(id)}>
          <BookOpenIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => remove()}>
          <TrashIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default compose(
  withStyles(styles),
)(ListItem);
