import React, { memo } from 'react'

function AgentCard({name, phone, email}) {
  return (
    <div className='w-72 h-36 rounded-xl bg-slate-300 flex justify-evenly items-center'>
       <div>
         <img src="/delhi.png" className='w-20 h-20 rounded-full' alt="" />
       </div>
        <div>
          <h1 className='text-xl font-semibold'>{name} </h1>
          <p className='text-gray-500'>{email}</p>
          <p>{phone}</p>
        </div>
      
    </div>
  )
}
export default memo(AgentCard)