import React, { memo } from 'react'

function SideLink({title, icon, handleMenu}) {
  return (
    <button onClick={handleMenu} className='hover:bg-slate-600  w-full p-3 rounded-md flex justify-start items-center gap-2 cursor-pointer'>{icon}<p>{title}</p></button>
  )
}

export default memo(SideLink)
