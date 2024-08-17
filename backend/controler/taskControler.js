const model = require('../model/taskModel')
const getTask = async (req, res) => {

    try {

        const responce = await model.find()
        res.status(200).json(responce)


    } catch (e) {
        res.status(400).json(e.message)

    }

}
const postTask = async (req, res) => {
    console.log(req.body)

    try {
        const { taskName, taskDescription } = req.body

        const responce = await new model({ taskName, taskDescription })
        await responce.save()
        res.status(200).json(responce)


    } catch (e) {
        res.status(400).json(e.message)

    }


}
const patchTask = async (req, res) => {
    try {
        const { taskName, taskDescription } =req.body
        const { id } = req.params

        const responce = await model.findByIdAndUpdate(id, { taskName, taskDescription }, { new: true })
        await responce.save()
        res.status(200).json(responce)


    } catch (e) {
        res.status(400).json(e.message)

    }

}
const deleteTask = async (req, res) => {

    try{
       
                const {id}=req.params
        
                 await model.findByIdAndDelete(id)
                 res.status(200).json(id)
        
        
            }catch(e){
                res.status(400).json("not deleted")
        
            }

}

module.exports = { getTask, postTask, patchTask, deleteTask }

