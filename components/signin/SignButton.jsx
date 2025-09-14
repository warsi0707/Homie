import React, { memo } from 'react'

function SignButton({title, onclick}) {
  return (
      <button onClick={onclick} className='bg-blue-100 w-full p-3 text-xl text-white rounded-full cursor-pointer'>{title}</button>
  )
}

export default memo(SignButton) 
