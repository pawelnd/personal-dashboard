import React, { Component } from 'react';
import {Button, withStyles} from '@material-ui/core';
import NewListDialog from '../new-list/NewListDialog';
import {compose} from "recompose";

const styles = () => ({
    buttonAddNew: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: '0 20px 20px 0',
    }
});


class AddingList extends Component {
    state = {
        createNewDialogIsOpen: false
    };

  render() {
    return (
      <div>
        <Button
          fab
          color="primary"
          aria-label="add"
          className={this.props.classes.buttonAddNew}
          onClick={() => this.setState({ createNewDialogIsOpen: true })}
        >
            +
        </Button>
        {this.state.createNewDialogIsOpen && (<NewListDialog closeDialog={() => {
          this.setState({ createNewDialogIsOpen: false });
        }}
        />)}
      </div>
    );
  }
}

export default compose(
    withStyles(styles),
)(AddingList);
