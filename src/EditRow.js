import React from "react";

const url = 'http://localhost:8080//api/subject';


class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
        this.setState({id: this.props.subject.id})
    }

    handleChangeTool = (event) => {
        this.setState({ tool : event.target.value});
        this.setState({id: this.props.subject.id})
    }
    handleChangeCost(event) {
        this.setState({cost: event.target.value});
        this.setState({id: this.props.subject.id})
    }

    handleSubmit(event) {
        alert('Сохранено');

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        });
        event.preventDefault();
    }

    render() {
        const subject = this.props.subject;

        return (

                <tr>
                    <td className="tdDate">
                        <input type="date" name={subject.date} placeholder={subject.date}
                                value={this.state.date} onChange={this.handleChangeDate}/>
                    </td>
                    <td className="tdTool">
                        <input type="text" name={subject.tool} placeholder={subject.tool}
                               value={this.state.tool} onChange={this.handleChangeTool}/>
                    </td>
                    <td className="tdCost">
                        $<input type="text" name={subject.cost} placeholder={subject.cost}
                               value={this.state.cost} onChange={this.handleChangeCost}/>
                    </td>
                    <td className="tdEdit">
                        <button className="exitButton" onClick={ () => {this.props.setEditMode(false)}}>
                            Exit
                        </button>
                        <button className="saveButton" onClick={this.handleSubmit}>Save</button></td>
                </tr>

        )
    }
}

export default EditRow;