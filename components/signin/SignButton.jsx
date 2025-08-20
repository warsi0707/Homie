import React, { memo } from 'react'

function SignButton({title, onclick}) {
  return (
    <button onClick={onclick} className="bg-indigo-600 px-8 py-2 text-white rounded-md hover:cursor-pointer">{title}</button>
  )
}

export default memo(SignButton) 
