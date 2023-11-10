import React from 'react'
import {useContext, useState} from 'react'
import GlobalContext from '../context/GlobalContext';

export default function Modal() {

    const { addTasks , setShowModal } = useContext(GlobalContext);

    const [taskName, setTaskName] = useState()

    const addTask = () =>{
        if(taskName !== undefined){
            addTasks({
                name : taskName
            })
            setShowModal(false)
        }
    }
  return (
    <div className="w-screen min-h-screen overflow-hidden absolute bg-[#F1F5F9] flex justify-center items-center">
        <div className="w-80  bg-white flex flex-col items-center justify-evenly rounded-xl">
            <div className="w-[90%] h-8 flex justify-end mt-4">
                <button onClick={()=>{setShowModal(false)}}><i className="fa-solid fa-xmark fa-xl"></i></button>
            </div>
            <div className="w-[90%] h-20 flex flex-col">
                <span className='mb-2'>TASK</span>
                <input type="text" placeholder="Task Name" onChange={(e)=>{setTaskName(e.target.value)}} className="input h-12 input-bordered w-full max-w-xs mb-3" />
            </div>
            <button onClick={()=>{addTask()}} className='bg-[#1E40AF] text-white w-24 h-8 rounded mb-4 mt-8'>
                ADD TASK
            </button>
        </div>
    </div>
  )
}
