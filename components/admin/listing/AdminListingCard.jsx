import Link from "next/link";
import { memo } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import * as motion from "motion/react-client";

function AdminListingCard({title, location, price, image}) {
  return (
    <motion.div
    // initial={{opacity:0, y:100}}
    //   whileInView={{opacity:1, y:0}}
    //   transition={{duration:0.8}}
    //   viewport={{once: true}}
    //   whileHover={{scale:0.9, }}
    //   whileTap={{scale:1.1}}
    className='h-80 w-72  relative overflow-hidden border pb-1 rounded-xl border-gray-400 shadow-2xl'>
        {/* <Link href={``}> */}
         <img src={image} className='h-64 w-72  rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
        {/* </Link> */}
      
        <div className="flex justify-between p-3">
            <div className="flex flex-col">
                <h1 className="text-sm  font-semibold">{title}</h1>
                <div className="flex text-sm items-center text-slate-500">
              <p><FaLocationDot/></p>
                    <h1>{location}</h1>
                </div>
            </div>
            <div className="flex text-lg  text-center items-center ">
                <p><LiaRupeeSignSolid/></p>
                <p>{price}</p>
            </div>
        </div>
      
    </motion.div>
  )
}
export default  memo(AdminListingCard)