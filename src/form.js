import React from "react";

const url = 'http://localhost:8080//api/subject';

class SubjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        date: '',
                        tool: '',
                        cost: ''
                        };

        this.handleChangeTool = this.handleChangeTool.bind(this);
        this.handleChangeCost = this.handleChangeCost.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeDate = (event) => {
        this.setState({ date : event.target.value});
    }

    handleChangeTool = (event) => {
        this.setState({ tool : event.target.value});
    }
    handleChangeCost(event) {
        this.setState({cost: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправили: ' +  this.state.toString());

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        event.reset();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Date:
                    <input type="date" value={this.state.value} name="date" onChange={this.handleChangeDate}/>
                </label>
                <label>
                    Tool:
                    <input type="text" value={this.state.value} name ="tool" onChange={this.handleChangeTool}/>
                </label>
                <label>
                    Cost:
                    <input type="text" value={this.state.value} name ="cost" onChange={this.handleChangeCost}/>
                </label>
                <input type="submit" value="Отправить"/>
            </form>

        );
    }
}

export default SubjectForm;