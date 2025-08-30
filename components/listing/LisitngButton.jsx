import React, { memo } from 'react'

function LisitngButton({onclick}) {
  return (
    <button onClick={onclick} className="bg-slate-900 p-2 md:p-3 border-t border-gray-400 px-10 md:px-16 cursor-pointer rounded-full">Send</button>
  )
}

export default memo(LisitngButton)
