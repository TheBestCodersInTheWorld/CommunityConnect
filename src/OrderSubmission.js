import React from 'react';
import './App.css';
import ResultsTable from './WorkOrders/ResultsTable.js'
import OrderSubmissionForm from './WorkOrders/OrderSubmissionForm';
import { Container, Row, Col } from 'react-bootstrap'

const WorkOrders = () => (
    <div>
        <Container>
            <Row>
                <Col xs={4}><OrderSubmissionForm/></Col>
                <Col xs={8}><ResultsTable /></Col>
            </Row>
        </Container>

    </div>
);

export default WorkOrders;