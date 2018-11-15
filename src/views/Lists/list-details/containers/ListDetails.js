import React from 'react';
import {compose} from 'recompose';
import {firebaseConnect, isLoaded, populate, withFirebase} from 'react-redux-firebase';
import {Card, Paper, Typography, withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import ViewLoader from '../../../components/ViewLoader/ViewLoader';

export class ListDetails extends React.Component {
  listID = this.props.match.params.id;

  constructor(props) {
    super(props);
    this.listID = props.match.params.id;
  }

  addItem() {
    this.props.firebase.push(`lists/${this.listID}/items`,
      {
        text: `Title ${Math.random()}`
      });
  }

  checkItem() {

  }

  deleteItem() {

  }

  render() {
    console.log(this.props);
    return (
      <ViewLoader isLoading={() => isLoaded(this.props.list)}>
        <Card className={this.props.classes.root} elevation={4}>
          <Typography type="title">test</Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Card>
      </ViewLoader>

    );
  }
}

const styles = () => ({
  root: {
    maxWidth: 500,
    margin: '0 auto',
    padding: 30
  },
});

const populates = [
  {child: 'owner', root: 'users'}
]
export default compose(
  firebaseConnect(props => {
    return [
      {
        path: `lists`,
        queryParams: ['orderByKey', `equalTo=${props.match.params.id}`],
        populates
      }
    ]
  }),
  connect(({firebase}) => ({
    list: populate(firebase, 'lists', populates),
  })),
  withStyles(styles)
)
(ListDetails)
