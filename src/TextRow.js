import React from "react";

class TextRow extends React.Component {
    render() {
        const subject = this.props.subject;

        return (
            <tr>
                <td className="tdDate">{subject.date}</td>
                <td className='tdTool'>{subject.tool}</td>
                <td className="tdCost">${subject.cost}</td>
                <td className="tdEdit"><button className="editButton" onClick={ () => {
                    this.props.setEditMode(true)
                }}>Edit</button></td>
            </tr>
        )
    }
}

export default TextRow;