import React, { memo } from 'react'

function SignButton({title, onclick}) {
  return (
    <button onClick={onclick} className="border border-black text-black px-8 py-2  rounded-md hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300">{title}</button>
  )
}

export default memo(SignButton) 
