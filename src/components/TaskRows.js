import React from 'react'

export const TaskRow = props => (
    <div>
        <tr key={props.task.name}>
            <td className="DescriptionRowNew">{props.task.name}</td>
            <td className="HechoRowNew">
                <input
                    type="checkbox"
                    checked={props.task.completed}
                    onChange={() => props.toggleTask(props.task)}
                />

            </td>
        </tr>
    </div>
);