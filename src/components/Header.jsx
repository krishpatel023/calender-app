import React from 'react'

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center h-10 mt-4">
        <h1 className='text-xl font-semibold'>Calendar</h1>
        <div>
            <a href="https://github.com/krishpatel023/calender-app" target="__blank">
            <button className='w-32 h-10 bg-[#1E40AF] rounded text-white mr-2 flex justify-center items-center gap-2'>
            <i className="fa-brands fa-github"></i> Github
            </button>
            </a>
        </div>
    </div>
  )
}
