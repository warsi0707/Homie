import React, { memo } from 'react'
import { ImLocation2 } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import Link from 'next/link';

function ListingsCard({title, location, price, id}) {
  return (
    <div className='h-96 w-96 bg-slate-100 relative text-black-100'>
      <img src="/login-page.png" className='rounded-3xl h-96 w-[500px]' alt="" />
      <div className='left-10 right-10 h-36 flex flex-col justify-between w-auto md:w-[300px] bg-white shadow-xl absolute -bottom-20 rounded-2xl p-3'>
        <div className='flex justify-between  text-lg'>
            <h1 className='flex items-center'><ImLocation2/> <p>{title.split(' ')[0]},{location.split(',')[0]}</p></h1>
            <button className='cursor-pointer'><CiBookmark/></button>
        </div>
        <p className='text-sm'>Spacious 3BHK apartment in a prime location with modern amenities.</p>
        <div className='border-t flex justify-between pt-4 overflow-hidden'>
            <p className='flex items-center font-bold'><MdCurrencyRupee/>{price.toLocaleString("en-IN")}</p>
            <Link href={`/listing/${id}`} className='bg-blue-100 px-3 flex items-center cursor-pointer rounded-full text-sm text-white'>Know More</Link>
        </div>
      </div>
    </div>
  )
}
export default memo(ListingsCard)