import Link from "next/link";
import { memo } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import * as motion from "motion/react-client";


 function ListingCard({title, location, price, id,image}) {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once: true}}
      whileHover={{scale:0.9, }}
      whileTap={{scale:1.1}}
    className=' w-[400px]  min-h-full relative overflow-hidden'>
        <Link href={`/listing/${id}`}>
         <img src={`${image}`} className='h-80 sm:h-[450px] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
        </Link>
        <h1 className="absolute top-4 right-5 text-5xl font-thin text-gray-300 "><MdArrowOutward/></h1>
        <div className="flex justify-between py-3">
            <div className="flex flex-col">
                <h1 className="text-sm sm:text-xl font-semibold">{title}</h1>
                <div className="flex items-center text-slate-500">
              <p><FaLocationDot/></p>
                    <h1>{location}</h1>
                </div>
            </div>
            <div className="flex text-lg sm:text-2xl  text-center items-center ">
                <p><LiaRupeeSignSolid/></p>
                <p>{price}</p>
            </div>
        </div>
      
    </motion.div>
  )
}
export default memo(ListingCard)