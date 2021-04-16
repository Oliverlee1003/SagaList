import React, {Component} from 'react';
import {Form, Button, FormGroup, Label, Input} from "reactstrap";

class NewUserForm extends Component {
    state = {
        firstName: '',
        lastName: ''
    };

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.currentTarget.value
        });
    };

    handleLastNameChange = e => {
        this.setState({
            lastName: e.currentTarget.value
        });
    };

    handleSubmit = e => {
        const {firstName, lastName} =  this.state;
        e.preventDefault();

        this.props.onSubmit({
            firstName,
            lastName
        });

        console.log("31");
        this.setState({
            firstName: '',
            lastName: ''
        });
        console.log(this.state.firstName);
        console.log(this.state.lastName);
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        First Name
                    </Label>
                    <Input required placeholder="First Name" onChange={this.handleFirstNameChange} value = {this.state.firstName}/>
                </FormGroup>

                <FormGroup>
                    <Label>
                        Last Name
                    </Label>
                    <Input required placeholder="Last Name" onChange={this.handleLastNameChange} value = {this.state.lastName}/>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color = "primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
            )
    }
}

export default NewUserForm;
