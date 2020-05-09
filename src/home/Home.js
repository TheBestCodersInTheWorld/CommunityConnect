import React from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap'
import axios from 'axios';

import ResultsTable from './ResultsTable'
import FoodSubmissionForm from './FoodSubmissionForm';
import moment from 'moment';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: []
        };
    }

    getData = () => {
        var endpoint = `/fnb_get`;
        let date = new Date();
        // the axios get method takes a GET endpoint
        axios.get(endpoint)
            .then(res => {
                var data = res.data;
                if (data === []) return;
                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i])
                    if (data[i].date) {
                        data[i].date = moment(data[i].date).format('MM-DD-YYYY');
                        data[i].canGo = data[i].canGo ? "yes" : "no";
                    };
                }
                let columns = []
                Object.keys(data[0]).forEach(key => {
                    columns.push({
                        title: key,
                        dataIndex: key,
                        key: key,
                    })
                })
                console.log(this.state.data);
                this.setState({ columns, data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="section" xs={4}>
                            <FoodSubmissionForm getData={this.getData}/>
                        </Col>
                        <Col className="section" xs={8}>
                            <ResultsTable
                                getData={this.getData}
                                data={this.state.data}
                                columns={this.state.columns}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;

