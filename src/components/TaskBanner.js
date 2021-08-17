import React from 'react'

export const TaskBanner = props => (
    <>
        <div>

            <h5>Quedan {props.taskItems.filter(t => !t.completed).length - 1} tareas por realizar</h5>
        </div>
    </>
)