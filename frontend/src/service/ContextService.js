import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const ContextProvider = createContext()





const ContextService = ({ children }) => {
    const [items, setItems] = useState([])
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [editTaskName, setEditTaskName] = useState("")
    const [editTaskDescription, setEditTaskDescription] = useState("")
    const [error, setError] = useState("")
    const [addMessage, setAddMessage] = useState("")
    const [editOption, setEditOption] = useState('')


    // port 
    // const port = `http://localhost:1000/tasks`
    const port = `${process.env.REACT_APP_BACKEND_URL}`
    console.log(port)





    const addItem = async () => {
        try {
            const responce = await axios.post(port, { taskName: taskName, taskDescription: taskDescription })
            setItems([...items, responce.data])
            setAddMessage("Items Added")
            setTimeout(() => setAddMessage(""), 3000);
            setTaskName("")
            setTaskDescription("")


        } catch (e) {
            console.log(e.message)

        }

    }

    const editItem = (id) => {
        console.log(id)
        setEditOption(id._id)
        setEditTaskName(id.taskName)
        setEditTaskDescription(id.taskDescription)


    }
    const updateItem = async (id) => {
        console.log(id)
        try {
            const responce = await axios.put(`${port}/${id._id}`, { taskName: editTaskName, taskDescription: editTaskDescription })
            console.log(responce)

            const item=items.map((e) => {

                if (e._id === responce.data._id) {
                    e.taskName = editTaskName
                    e.taskDescription = editTaskDescription
                }
                return e


            })
            setItems(item)
            console.log(item)
            setAddMessage("Items Updated")
            setTimeout(() => setAddMessage(""), 3000);
            setEditOption("")


        } catch (e) {
            console.log(e.message)

        }

    }
    const deleteItem = async (item) => {
        try {
            const responce = await axios.delete(`${port}/${item._id}`)
            console.log(responce)
            const deletedItem=items.filter((e)=>e._id!==responce.data)
            
            setItems(deletedItem)
            setAddMessage("")






        } catch (e) {
            console.log(e.message)

        }


    }


    // lode all items 
    useEffect(() => {
        const items = async () => {
            try {
                const responce = await axios.get(port)
                await setItems(responce.data)



            } catch (e) {
                console.log(e.message)

            }

        }
        items()

    }, [port])
    useEffect(() => {
        console.log(items)
    }, [items])





    return (
        <ContextProvider.Provider value={{
            items, setItems, taskName, setTaskName, taskDescription, setTaskDescription, editTaskName, setEditTaskName, editTaskDescription, setEditTaskDescription, error, setError, addItem, editItem, updateItem, deleteItem, addMessage, editOption, setEditOption
        }}>
            {children}

        </ContextProvider.Provider>
    )
}

export default ContextService