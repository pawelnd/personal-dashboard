import React from 'react';
import Dialog, { DialogContent,DialogTitle} from '@material-ui/core/Dialog';
import {dataToJS, firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import NewListForm from "./NewListForm";

export class NewListDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    handleRequestClose = () => {
        this.props.closeDialog();
    };

    submit = itemObj => {
      if(this.props.auth.uid){
        itemObj.owner = this.props.auth.uid
        this.props.firebase.push('/lists', itemObj).then(() => this.handleRequestClose());
      }else {
        console.error("Cannot determine owner  for list")
      }

        this.props.closeDialog();
    }

    render() {
        return (
            <Dialog open={true} onRequestClose={this.handleRequestClose}>
                <DialogTitle>List name</DialogTitle>
                <DialogContent>
                    <NewListForm onSubmit={this.submit} cancel={this.handleRequestClose}></NewListForm>
                </DialogContent>
            </Dialog>
        );
    }
}

export default compose(
    firebaseConnect([
        '/lists',
    ]),
      connect(
        (state) => ({
          lists: state.firebase.data.lists,
          auth: state.firebase.auth
        })
      )
)
(NewListDialog)
