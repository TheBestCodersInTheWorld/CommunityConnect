import React from 'react';
// import '../App.css';
import ResultsTable from './ResultsTable'
import FoodSubmissionForm from './FoodSubmissionForm';
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => (
    <div>
        <Container>
            <Row>
                <Col className="section" xs={4}><FoodSubmissionForm/></Col>
                <Col className="section" xs={8}><ResultsTable /></Col>
            </Row>
        </Container>

    </div>
);

export default Home;