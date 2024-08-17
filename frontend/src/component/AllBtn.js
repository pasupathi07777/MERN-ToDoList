// import React, { useContext } from 'react'
// import { ContextProvider } from '../service/ContextService'

const AllBtn = ({ funOne, funTwo, btnOne, btnTwo, item }) => {
    // const { } = useContext(ContextProvider)
    return (
        <main className='flex gap-1 flex-col '>

            <input className='px-2 py-1 bg-yellow-700 rounded text-white cursor-pointer' type="submit" value={btnOne} onClick={() => { funOne(item); }} />
            <input className='px-2 py-1 bg-red-700 rounded text-white cursor-pointer' type="submit" value={btnTwo} onClick={() => funTwo(item)} />
        </main>
    )
}

export default AllBtn