import React from 'react'
import Prototype from '../assets/prototype.png'
import PrototypeSM from '../assets/prototype-small.png'
import { useNavigate } from 'react-router'

export default function Homepage() {
    const navigate = useNavigate()

    
  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col justify-between'>
        <div className="w-full h-[6%] flex justify-between items-center text-center mt-4">
            <h1 className='text-2xl font-semibold ml-4'>Calendar</h1>
            <div className='mr-4'>
                <a href="https://github.com/krishpatel023/calender-app" target="__blank">
                <button className='w-32 h-10 bg-[#1E40AF] rounded text-white mr-2 flex justify-center items-center gap-2'>
                <i className="fa-brands fa-github"></i> Github
                </button>
                </a>
            </div>
        </div>
        <div className='h-[60%] w-full flex flex-col justify-center items-center gap-8 text-center'>
            <h1 className='text-6xl font-bold'>Quick <span className='italic font-light'>and</span> Simple</h1>
            <button className='w-60 h-12 text-xl bg-[#1E40AF] rounded text-white mr-2 flex justify-center items-center gap-4'
                onClick={()=>navigate('/calender')}
            >
            <i className="fa-regular fa-calendar"></i> Go to Calender
            </button>
        </div>
        <div className='w-full flex justify-center breakPoint2:hidden'>
            <img src={Prototype} alt="" className='w-[60%] object-contain relative bottom-[0%] rounded-lg'/>
        </div>
        <div className='w-full hidden justify-center breakPoint2:flex'>
            <img src={PrototypeSM} alt="" className='w-[80%] object-contain relative bottom-[-10%] rounded-lg'/>
        </div>
    </div>
  )
}
