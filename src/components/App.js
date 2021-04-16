import React, {Component} from "react";
import {connect} from 'react-redux';
import {getUsersRequest} from "../actions/users";
import UserList from './UsersList';
import NewUserForm from './NewUserForm';

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
        console.log(firstName, lastName);
    };

    render() {
        const users = this.props.users;
        const iterator = testing();
        console.log(iterator.next());
        return (
            <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
                <NewUserForm onSubmit = {this.handleSubmit}/>
                <UserList users = {users.items}/>
            </div>
        );
    }
}

export default connect(({users}) => ({users}), {
    getUsersRequest
})(App);
