import React from "react";

class TextRow extends React.Component {
    render() {
        const subject = this.props.subject;

        return (
            <tr>
                <td>{subject.date}</td>
                <td>{subject.tool}</td>
                <td>${subject.cost}</td>
                <td><button onClick={ () => {
                    this.props.setEditMode(true)
                }}>Редактировать</button></td>
            </tr>
        )
    }
}

export default TextRow;