import Link from "next/link";
import { memo } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";



 function ListingCard({title, location, price, id,image}) {
    console.log(image)
  return (
    <div className=' w-[400px] min-h-full relative'>
        <Link href={"#"}>
         <img src="/homeImage.png" className='h-[450px] w-full ' alt="" />
        </Link>
        <h1 className="absolute top-4 right-5 text-5xl font-thin text-gray-300 "><MdArrowOutward/></h1>
        <div className="flex justify-between py-3">
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="flex items-center text-slate-500">
              <p><FaLocationDot/></p>
                    <h1>{location}</h1>
                </div>
            </div>
            <div className="flex text-2xl  text-center items-center ">
                <p><LiaRupeeSignSolid/></p>
                <p>{price}</p>
            </div>
        </div>
      
    </div>
  )
}
export default memo(ListingCard)