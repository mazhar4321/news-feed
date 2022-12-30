import React, { useState } from 'react'

function UpdateComment({handleSubmit, initialState = ""}) {
    const [text, setText] = useState(initialState)
    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(text)
    }
  return (
   <form onSubmit={onSubmit}>
    <div className='relative mt-5'>
    <textarea className=' w-full items-center  rounded-full p-3 h-14 px-8 border overflow-hidden' value={text} onChange={(e)=> setText(e.target.value)}></textarea>
    <button className='absolute top-4 right-4'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
    </button>
    </div>
   </form>
  )
}

export default UpdateComment