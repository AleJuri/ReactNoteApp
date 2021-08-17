
import './App.css';
import React, { useEffect, useState } from 'react'
import { TaskRow } from './components/TaskRows';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl'
import { DeleteData } from './components/DeleteData'


function App() {

  const [userName, setUserName] = useState('Ale');

  const [taskItems, setTaskItems] = useState([
    { name: '', completed: true }

  ])
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([{}]);
      setShowCompleted(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems]);






  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, completed: false }])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, completed: !t.completed } : t)))

  const taskTableRows = (completedValue) =>
    taskItems
      .filter(task => task.completed === completedValue)
      .map(task => (


        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask} />
      ))



  return (
    <div className="app-main">

      <TaskCreator callback={createNewTask} />
      <div>
        <div className="div-1">
        <TaskBanner taskItems={taskItems} />
        <table>
          <thead>
            <tr>
              <th className="DescriptionRow">Tareas</th>
              <th className="HechoRow">Estado</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(false)}
          </tbody>
        </table>





        <div className="VisibilityControl">
          <VisibilityControl
            description="Tareas Completas"
            isChecked={showCompleted}
            callback={checked => setShowCompleted(checked)}
          />
        </div>
        {
          showCompleted && (
            <table>
              <thead>
                <tr>
                  <th className="DescriptionRow">Tareas</th>
                  <th className="HechoRow">Hecho</th>
                </tr>
              </thead>
              <tbody>
                {taskTableRows(true)}

              </tbody>
            </table>

          )
        }
        <DeleteData />
        </div>
      </div>
    </div>
  );
}

export default App;
