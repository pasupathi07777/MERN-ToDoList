import React, { useContext } from 'react'
import UserInput from './UserInput'
import { ContextProvider } from '../service/ContextService'

const Body = () => {
    const { taskName, setTaskName, taskDescription, setTaskDescription, addItem, addMessage,  } = useContext(ContextProvider)
    return (
        <div>
            <p className='text-green-900 '> {addMessage}</p>

            <UserInput taskName={taskName} setTaskName={setTaskName} taskDescription={taskDescription} setTaskDescription={setTaskDescription} addBtn={"Add"} editBtn={"Edit"} addItem={addItem} deleteBtn={"Delete"} />


        </div>
    )
}

export default Body