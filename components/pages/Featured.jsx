import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function Featured() {
  return (
    <div className=' w-full h-[636px] bg-slate-100 p-2 py-5 md:p-10 flex flex-col gap-5 md:gap-10 '>
        <div className='flex  w-full justify-between'>
            <h1 className='text-blue-100 text-xl md:text-4xl font-bold'>Featured Property</h1>
            <Link href={"#"} className='border-2 border-blue-100 px-2 md:p-2 md:px-8 rounded-full md:text-xl text-blue-100 text-center flex items-center gap-2 hover:bg-blue-100 hover:text-white transition-all duration-300'><p>See More Listings</p> <MdArrowOutward/></Link>
        </div>
        <div className='h-[478px] w-full flex flex-col lg:flex-row justify-between md:gap-10'>
            <div className='w-full h-full'>
                <img src="/home1.png" className='w-full h-full' alt="" />
            </div>
            <div className='hidden lg:flex h-[650px] w-full  flex-col lg:flex-row justify-between gap-10'>
                <div className='h-[478px] w-full'>
                    <img src="/home2.png" className='h-[478px] w-full' alt="" />
                </div>
                <div className='w-full h-[226px] flex flex-col gap-6'>
                    <img src="/home3.png" className='h-[226px] w-[309px]' alt="" />
                    <img src="/home4.png" className='h-[226px] w-[309px]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
