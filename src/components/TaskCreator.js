import React, { useState } from 'react'

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState("");

    const updateNewTaskValue = e => setNewTaskName(e.target.value)
    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName("");



    }


    return (
        <div className="app-main">
            <div className="div-1">
                <h1>Agendame React</h1>
                <form onSubmit={createNewTask}>
                    <input id="task-creator"
                        type="text"
                        value={newTaskName}
                        onChange={updateNewTaskValue}
                        placeholder="Agrega tu nueva tarea"
                    />
                </form>
                <button
                    id="boton"
                    className="btn-create"
                    onClick={createNewTask}
                > Agregar</button>
            </div>
        </div>
    )
}