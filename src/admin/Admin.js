import React from "react";
import { Form, Button, Card, Toast } from "react-bootstrap";
import toastLogo from "../assets/logo.svg";
import "../App.css";
import axios from 'axios';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objectId: ""
        };
    }

    handleChange = e => {
        this.state["objectId"] = e.target.value;
        console.log(this.state.objectId);
    }

    onDelete() {
        axios.post(`/fnb_delete`, {
            objectId: this.state.objectId
        }).then(res => {
            if (res.status == 200) {
                console.log("successfully deleted the object!");
            } else {
                console.log("failed to delete!");
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <div style={{ paddingTop: "1em" }}>
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
                                    Enter the object id to delete
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicNotes">
                                        <Form.Label>Object to Delete</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            objectId="objectId"
                                            onChange={this.handleChange}
                                            placeholder="93845938458934895"
                                        />
                                    </Form.Group>
                                </Form>
                                <div style={{ paddingTop: "1em" }}>
                                    <Button
                                        variant="danger"
                                        onClick={(click) => this.onDelete()}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;