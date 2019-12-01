import React from 'react';
import '../App.css';
import { Form, Button, Card, Toast } from 'react-bootstrap';
import axios from 'axios';
import toastLogo from '../assets/logo.png';

class FoodSubmissionForm extends React.Component {
    constructor(props) {
        super(props);
        this.form = {
            name: '',
            email: '',
            foodType: '',
            notes: ''
        };
        this.state = {
            showToast: false
        };
    }
    onSubmit() {
        axios.post(`${window.location.host}/:8000/fnb_submission`, {
            name: this.form.name,
            email: this.form.email,
            foodType: this.form.foodType,
            notes: this.form.notes
        }).then(res => {
            this.props.getData();
        });
        this.setShowToast(true);
    }

    handleChange = e => {
        this.form[e.target.name] = e.target.value;
    }

    setShowToast = showToast => {
        this.setState({ showToast })
    }

    render() {
        return (
            <div>
                <Toast  style={{ position: 'absolute', top: '0px', left: '0px', zIndex: 999 }} onClose={() => this.setShowToast(false)} show={this.state.showToast} delay={4000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">
                            <img style={{ height: '1em', width: '1em' }} src={toastLogo} alt="logo"></img> Thank you for your submission. </strong>
                        <small>0s ago</small>
                    </Toast.Header>
                    <Toast.Body>Our system will add your food submission to the database.</Toast.Body>
                </Toast>
                <Card>
                    <Card.Header>
                        <div>
                            <img src={toastLogo} alt="logo"
                                style={{ width: '1em', height: '1em', marginRight: '0.5em' }} /> Submit the food you are bringing
                            </div>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicNotes">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                size="sm"
                                name='name'
                                onChange={this.handleChange}
                                placeholder="First and last name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    size="sm"
                                    onChange={this.handleChange}
                                    name='email'
                                    type="email"
                                    placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicFoodType">
                            <Form.Label>Food Type</Form.Label>
                            <Form.Control
                                size="sm"
                                onChange={this.handleChange}
                                name='foodType'
                                placeholder="Type of food like burgers, cake, etc" />
                            </Form.Group>

                            <Form.Group controlId="formBasicNotes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control
                                size="sm"
                                onChange={this.handleChange}
                                name='notes'
                                placeholder="Notes on quantity of food, etc" />
                            </Form.Group>
                            
                            <Button variant="primary" onClick={click => this.onSubmit()}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default FoodSubmissionForm;