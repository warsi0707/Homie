import React from 'react'
import DoCard from '../DoCard'
import { CgLoadbarSound } from "react-icons/cg";
import { GiHouseKeys } from "react-icons/gi";
import { RiMic2AiFill } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
export default function WhatDo() {
  return (
    <div id='whatwedo' className='w-full h-full overflow-hidden n lg:h-[523px]  p-10 space-y-5 '>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-blue-100 text-4xl font-bold'>What We Do?</h1>
            <p className='text-center text-xl w-[479px] text-gray-100'>Helping you find, buy, and rent the perfect property with ease.</p>
        </div>
        <div className='flex flex-wrap justify-center md:justify-between gap-5 lg:flex-row lg:justify-between'>
            <DoCard title={'Buy & Sell Properties'} text={'Find verified homes for sale or list your property with ease.'} icon={<CgLoadbarSound/>}/>
            <DoCard title={'Find Rental Homes'} text={'Browse through thousands of rental options suited to your needs'} icon={<GiHouseKeys/>}/>
            <DoCard title={'Smart AI Property Search'} text={'Get instant recommendations based on your budget & location'} icon={<RiMic2AiFill/>}/>
            <DoCard title={'Smart AI Property Search'} text={'Get instant recommendations based on your budget & location'} icon={<MdLockOutline/>}/>
        </div>
      
    </div>
  )
}
