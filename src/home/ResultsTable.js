import React from 'react';
import axios from 'axios';
import { Form, Button, Card, Toast } from 'react-bootstrap';
import Table from 'rc-table';


class ResultsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            columns: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        console.log("im in the get Data section?")
        var endpoint = 'http://localhost:8000/fnb_get';
        // the axios get method takes a GET endpoint
        axios.get(endpoint)
            .then(res => {
                console.log(res);
                var data = res.data;
                if (data === []) return;
                console.log(data)
                let columns = []
                Object.keys(data[0]).forEach(key => {
                    columns.push({
                        title: key,
                        dataIndex: key,
                        key: key,
                        width: 100
                    })
                })
                this.setState({ columns })
                this.setState({ data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {

        let bodyStyle = {
            overflow: 'auto',
            height: 500,
        }

        return (
            <div>
                <Table bodyStyle={bodyStyle} className="table" columns={this.state.columns} data={this.state.data} />
            </div>
        )
    }

}

export default ResultsTable;
