import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuidv4 } from 'uuid';
import { emitEvent } from '../../utils/src/mfe-utils';

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    emitEvent('@mfe/react-route/todo/add-task', {
      detail: {
        id: uuidv4(),
        describe: task
      }
    })

    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import('@mfe/react-parcel')}
      />
    </>
  )
}

export default App