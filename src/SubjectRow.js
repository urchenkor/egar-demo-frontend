import React from "react";
import EditRow from "./EditRow";
import TextRow from "./TextRow";

class SubjectRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false
        }
    }

    setEditMode = (value) => {
        this.setState ({
            isEditMode: value
        })
    }

    render() {
        const subject = this.props.subject;
        if (this.state.isEditMode) {
            return (
                <EditRow subject={subject} setEditMode={this.setEditMode}/>
            )
        } else {
            return (
                <TextRow subject={subject} setEditMode={this.setEditMode}/>
            )
        }
    }
}

export default SubjectRow;