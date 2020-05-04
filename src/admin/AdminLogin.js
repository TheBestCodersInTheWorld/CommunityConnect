import React from "react";
import { Modal } from "react-bootstrap";
import { Form, Button, Card, Toast } from "react-bootstrap";
import toastLogo from "../assets/logo.svg";
import "../App.css";
import axios from 'axios';
import Admin from './Admin.js';

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unlocked: false
        };
        this.form = {
            password: ""
        };
    }

    onSubmit() {
        axios.post(`/fnb_password`, {
            password: this.form.password
        }).then(res => {
            if (res.status == 200) {
                this.setState({unlocked:true})
            }
        });
    }

    handleChange = e => {
        this.form["password"] = e.target.value;
    }

    render() {
        return (
            <div>
                {!this.state.unlocked && (
                    <div>
                        <Card>
                            <Card.Header>
                                <div>
                                    <img
                                        src={toastLogo}
                                        alt="logo"
                                        style={{
                                            width: "1em",
                                            height: "1em",
                                            marginRight: "0.5em",
                                        }}
                                    />{" "}
                                    Enter the password for the Admin Page
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicNotes">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            password="password"
                                            type="password"
                                            onChange={this.handleChange}
                                            placeholder="password123"
                                        />
                                    </Form.Group>
                                </Form>
                                <div style={{ paddingTop: "1em" }}>
                                    <Button
                                        variant="primary"
                                        onClick={(click) => this.onSubmit()}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )}
                {this.state.unlocked && <Admin/>}
            </div>
        );
    }
}

export default AdminLogin;