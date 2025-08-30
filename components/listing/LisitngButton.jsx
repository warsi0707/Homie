import  { memo } from 'react'
import * as motion from "motion/react-client"

function LisitngButton({title,onclick}) {
  return (
    <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} onClick={onclick} className="bg-slate-900 p-2 md:p-3 border-t border-gray-400 px-10 md:px-16 cursor-pointer rounded-full">{title}</motion.button>
  )
}

export default memo(LisitngButton)
