import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SubjectForm from "./form";
import SubjectRow from "./SubjectRow";
import RenderLineCharts from "./LineCharts";

const url = 'http://localhost:8080//api/subject';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    subjects: json,
                })
            });
    }

    render() {
        this.componentDidMount();

        const {subjects} = this.state;
        const rows = [];
        subjects.forEach((subject) =>
            rows.push(
                <SubjectRow
                    subject = {subject}
                    key = {subject.id}
                />
                )
        )

        return (
            <div>
                <SubjectForm />
            <table className="mainTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
                    <RenderLineCharts subjects={this.state.subjects} />
            </div>
        );
    }
}

ReactDOM.render(
    <Result />,
    document.getElementById('root')
);

