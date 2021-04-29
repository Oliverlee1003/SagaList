import React, {Component} from "react";
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, deleteUserRequest, usersError} from "../actions/users";
import UserList from './UsersList';
import NewUserForm from './NewUserForm';
import {Alert} from 'reactstrap';


function* testing() {
    console.log("before 1");
    yield 1;
    console.log("after 1");
    yield 2;
    yield 3;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.props.getUsersRequest();
    }

    handleSubmit = ({firstName, lastName}) => {
        this.props.createUserRequest({firstName, lastName});
    };

    handleDeleteUserClick = (userId) => {
        this.props.deleteUserRequest(userId);
    };

    handleCloseAlert = () => {
        this.props.usersError({
            error: ''
        });
    };

    render() {
        const users = this.props.users;
        const iterator = testing();
        console.log(iterator.next());
        return (
            <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
                <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
                    {this.props.users.error};
                </Alert>
                <NewUserForm onSubmit = {this.handleSubmit}/>
                <UserList users = {users.items} onDeleteUser={this.handleDeleteUserClick}/>
            </div>
        );
    }
}

export default connect(({users}) => ({users}), {
    deleteUserRequest,
    getUsersRequest,
    createUserRequest,
    usersError
})(App);
