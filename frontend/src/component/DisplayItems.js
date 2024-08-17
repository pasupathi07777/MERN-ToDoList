import React, { useContext } from 'react'
import { ContextProvider } from '../service/ContextService'
import AllBtn from './AllBtn'

const DisplayItems = () => {

  const { items, editOption, editItem, setEditOption, deleteItem, updateItem, editTaskName, setEditTaskName, editTaskDescription, setEditTaskDescription, } = useContext(ContextProvider)

  const cancelBtn = (e => setEditOption(0))
  const title = (e => setEditTaskName(e.target.value))
  const description = (e => setEditTaskDescription(e.target.value))

  return (
    <div className='  px-[12px] md:px-[24px] pb-3 flex flex-col gap-x-3 gap-y-3 md:grid md:grid-cols-2 '>

      {items.length ? items.map((e, i) => (

        <div key={i} className='flex gap-3 items-center h-fit bg-[#dcdde1] py-2 rounded  px-2  '>

          {editOption !== e._id
            ?
            <div className='flex items-center w-full flex-col   justify-center  '>
              <p className='w-full font-semibold h-full  py-1'>{e.taskName}</p>
              <p className='w-full font-semibold h-full  py-1 '>{e.taskDescription}</p>
            </div>
            :
            <div className="flex w-full gap-1  flex-col  ">
              <input className='w-full border border-black rounded  px-2 py-1 focus:outline-none' type="text" placeholder='Add Title' value={editTaskName} onChange={title} name="" id="" />
              <input className='w-full border border-black rounded  px-2 py-1 focus:outline-none' type="text" placeholder='Add Description' value={editTaskDescription} onChange={description} name="" id="" />
            </div>
          }

          {/* <div className="flex  "> */}
            {editOption !== e._id
              ?
              <AllBtn funOne={editItem} funTwo={deleteItem} btnOne={"Edit"} btnTwo={"Delete"} item={e} />
              :
              <AllBtn funOne={updateItem} funTwo={cancelBtn} item={e} btnOne={"Update"} btnTwo={"Cancel"} />
            }
          {/* </div> */}
        </div>







      )) : <p>Empty items</p>}
    </div>

  )
}

export default DisplayItems