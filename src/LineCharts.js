import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import React from "react";
const url = 'http://localhost:8080//api/subject';

class RenderLineCharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                })
            });
    }

    render() {
        return (
            <LineChart width={400} height={400} data={this.state.data}>
                <Line type="monotone" dataKey="cost" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="date" />
                <YAxis dataKey="cost" />
            </LineChart>
        )
    }
}

export default RenderLineCharts;