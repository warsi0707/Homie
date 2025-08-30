import React, { memo } from 'react'
import * as motion from "motion/react-client";

 function LocationCard({city, image}) {
  return (
     <motion.div
     whileHover={{scale:1.1}}
     whileTap={{scale:0.9}}
     className="relative w-96 h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer group">
      <img src={image} alt="" className="object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full" />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-2xl font-semibold">{city}</h2>
        <p className="text-sm">77 properties</p>
      </div>
    </motion.div>
  )
}
export default memo(LocationCard)