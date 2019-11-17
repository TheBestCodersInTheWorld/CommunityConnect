import React from 'react';
import axios from 'axios';
import { Form, Button, Card, Toast } from 'react-bootstrap';


class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData() {
        var endpoint = 'http://localhost:8000/fnb_get';
        // the axios get method takes a GET endpoint
        axios.get(endpoint)
            .then(res => {
                console.log(res);
                var data = res.data;
                this.setState({ data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        return (
            <div>
                <Button variant="primary" onClick={click => this.getData()}>
                    Get Data
                </Button>            
                <div>This is where the results will be</div>
                <u1> { this.state.data.map(dataObject => <li>{dataObject.name}</li>)} </u1>
            </div>
        )
    }

}

export default ResultsTable;
