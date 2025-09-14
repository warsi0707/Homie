import React from 'react'
import StarterPage1 from './StarterPage1'
import Aboutpage from './Aboutpage'
import ListingPage from './ListingPage'
import ServicePage from './ServicePage'
import LocationPage from './LocationPage'
import WhatDo from './What-Do'
import Featured from './Featured'

export default function Dashboard() {
  return (
    <div className='space-y-10'>
      <StarterPage1/>
      <WhatDo/>
      <Featured/>
      {/* <Aboutpage/> */}
      <ListingPage/>
      <ServicePage/>
      <LocationPage/>
    </div>
  )
}
