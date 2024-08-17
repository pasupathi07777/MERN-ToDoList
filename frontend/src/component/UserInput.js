import React, { useContext } from 'react'
import { ContextProvider } from '../service/ContextService'

const UserInput = ({ taskName, setTaskName, taskDescription, setTaskDescription, addBtn, editBtn, deleteBtn, }) => {

    const { addItem } = useContext(ContextProvider)



    const title = (e => setTaskName(e.target.value))
    const description = (e => setTaskDescription(e.target.value))
    return (
        <div className='flex gap-3  my-4 px-[12px]  md:px-[24px]  '>
            <div className="flex w-full gap-2 flex-col md:flex-row ">
                <input className='w-full border border-black rounded  px-2 py-1 focus:outline-none' type="text" placeholder='Add Title' value={taskName} onChange={title} name="" id="" />
                <input className='w-full border border-black rounded  px-2 py-1 focus:outline-none' type="text" placeholder='Add Description' value={taskDescription} onChange={description} name="" id="" />
            </div>
            
            <div className="flex gap-1 justify-center items-center">
                <input className='px-2 py-1 bg-green-700 rounded h-full  text-white cursor-pointer' type="submit" value={addBtn} onClick={addItem} />
              

            </div>
        </div>
    )
}

export default UserInput