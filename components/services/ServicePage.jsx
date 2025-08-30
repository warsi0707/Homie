import Link from 'next/link'
import React from 'react'
import ServiceCard from './ServiceCard'
import LocationPage from '../location/LocationPage'

export default function ServicePage() {
  return (
    <div id='service' className='h-full w-full flex gap-2 flex-col md:flex-row '>
      <div className=' w-full p-5  flex flex-col gap-12'>
        <div className='w-full space-y-2'>
            <p>Services</p>
            <h1 className='text-xl sm:text-5xl'>Connecting you with the perfect property.</h1>
        </div>
        <img className='' src="/homeImage.png" alt="" />
      </div>
      <div className=' w-full p-5 space-y-5'>
        <ServiceCard/>  
        <ServiceCard/>  
        <ServiceCard/>  
     
      </div>
    </div>
  )
}
