import {useContext} from 'react'
import GlobalContext from '../context/GlobalContext';

export default function Tasks() {
    const { tasks, setShowModal , setCurrentDrag, deleteTasks} = useContext(GlobalContext);
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    const handleDrag = (data)=>{
        const rndInt = randomIntFromInterval(10000, 90000)
        setCurrentDrag({
            id : rndInt,
            name : data.name
        })
    }

    const handleDelete = (name)=>{
        deleteTasks(name)
    }
  return (
    <div className='w-full bg-white flex flex-col items-center rounded-lg gap-2'>
        <button onClick={()=>{setShowModal(true)}} className='h-10 rounded bg-[#1E40AF] text-white w-[85%] mt-8'>Add New Task</button>
        <div className='min-h-[1px] w-[85%] bg-gray-200 mt-3'></div>
        {
            tasks?
                tasks.map((data,i)=>
                    <div draggable onDragStart={()=>handleDrag(data)} key={i} className='w-[90%] h-16 rounded hover:bg-[#F1F5F9] flex justify-between items-center'>
                        <span className={`w-[10%] text-xs text-[#1E40AF] flex justify-center`}><i className="fa-solid fa-circle fa-xs"></i></span>
                        <div className='w-[80%] flex items-center'>
                            <span>{data.name}</span>
                        </div>
                        <button className='w-[10%] text-sm text-gray-500' onClick={()=>handleDelete(data.name)}><i className="fa-solid fa-trash"></i></button>
                        {/* <button className='w-[10%] text-sm text-gray-500'><i className="fa-regular fa-pen-to-square"></i></button> */}

                    </div>
                )
            :null
        } 
        {
            tasks?.length === 0?
            <span>Add tasks to be displayed</span>
            :null
        }
        <div className='min-h-[1px] w-[85%] mt-3'></div>

    </div>
  )
}
