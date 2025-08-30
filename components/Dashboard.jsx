import React from 'react'
import StarterPage1 from './home/StarterPage1'
import Aboutpage from './about/Aboutpage'
import ListingPage from './listing/ListingPage'
import ServicePage from './services/ServicePage'
import LocationPage from './location/LocationPage'
import FooterPage from './footer/FooterPage'

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
