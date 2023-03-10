import React, { useState, useEffect } from 'react'
import { listenEvent } from '../../utils/src/mfe-utils'

const App = () => {
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    listenEvent('@mfe/react-route/todo/add-task', event => {
      updateTasks(oldTask => [...oldTask, event.detail])
    })

    // window.addEventListener('@mfe/react-route/todo/add-task', event => {
    //   updateTasks(oldTask => [...oldTask, event.detail])
    // })
  }, [])

  return (
    <>
      <h1>@mc/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
