import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {push} from 'react-router-redux';
import {firebaseConnect, populate} from 'react-redux-firebase';
import PrintLists from './PrintLists';
import AddingList from "./AddingList";

class ListsManagement extends React.Component {
    openDetailed = (listId) => {
        this.props.push(`/list/${listId}`);
    };

    doDelete = (listId) => {
        this.props.firebase.remove(`/lists/${listId}`);
    };

    render(){
        return (
            <div>
                <PrintLists lists={this.props.lists}
                            openDetailed={this.openDetailed.bind(this)}
                            doDelete={this.doDelete.bind(this)}
                ></PrintLists>
                <AddingList />
            </div>
        )
    }
}
const populates = [
  { child: 'owner', root: 'users' }
]

export default compose(
    firebaseConnect(props => [
        {path: 'lists', populates}
    ]),
  connect(({ firebase }) => ({
    lists: populate(firebase, 'lists', populates),
  }),{push})
)(ListsManagement)