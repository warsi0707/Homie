import React from 'react'
import StarterPage1 from './StarterPage1'
import Aboutpage from './Aboutpage'
import ListingPage from './ListingPage'
import ServicePage from './ServicePage'
import LocationPage from './LocationPage'

export default function Dashboard() {
  return (
    <div className='p-3 sm:p-10'>
      <StarterPage1/>
      <Aboutpage/>
      <ListingPage/>
      <ServicePage/>
        <LocationPage/>
    </div>
  )
}
