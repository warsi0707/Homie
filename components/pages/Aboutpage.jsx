import React from 'react'
import { IoPeopleSharp } from "react-icons/io5";
function Aboutpage() {
  return (
    <div id='about' className='h-[500px] py-5 w-full flex flex-col md:flex-row justify-center items-center'>
      <div className='w-[500px] flex flex-col justify-center items-center md:px-24 text-2xl'>
        <h1 className='text-6xl'><IoPeopleSharp/></h1>
        <h1 className='text-3xl font-semibold'>1.000+</h1>
        <p>satisfied</p>
        <p>customer</p>
      </div>
      <div className=' w-full flex  flex-col justify-center sm:items-center sm:text-center md:text-start  md:items-start p-5 md:p-10 space-y-3'>
        <h1 className='text-slate-400 text-2xl md:text-xl'>About</h1>
        <p className='text-xl md:text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat libero enim molestiae? Earum repellat impedit, quasi iure nesciunt laboriosam rerum! Eaque, obcaecati perferendis culpa asperiores inventore facere consequatur excepturi non.</p>
      </div>
    </div>
  )
}

export default Aboutpage
