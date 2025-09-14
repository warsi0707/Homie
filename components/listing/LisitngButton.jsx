import  { memo } from 'react'

function LisitngButton({title,onclick}) {
  return (
    <button  onClick={onclick} className="bg-blue-100 text-white w-full p-2 md:p-3 border-t border-gray-400 px-10 md:px-16 cursor-pointer rounded-full">{title}</button>
  )
}

export default memo(LisitngButton)
