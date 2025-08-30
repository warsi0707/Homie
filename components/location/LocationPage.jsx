import React from 'react'
import LocationCard from './LocationCard'

function LocationPage() {
  return (
    <div id='location' className='min-h-screen my-5  w-full flex flex-col gap-5 justify-center'>
        <div className='flex flex-col justify-center text-center items-center pb-10'>
            <p className='text-2xl text-gray-400'>Location</p>
            <h1 className='text-5xl font-semibold'>Stategically located to serve you better</h1>
        </div>
        
        <div className='flex flex-wrap gap-5 w-full justify-center md:justify-between items-center'>
            <LocationCard city={'Mumbai'} image={"/mumbai.png"}/>
            <LocationCard city={'Delhi'} image={"/delhi.png"}/>
            <LocationCard city={'Lucknow'} image={"/lucknow.png"}/>
        </div>
      
    </div>
  )
}

export default LocationPage
