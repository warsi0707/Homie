'use client'
import axios from 'axios'
import AdminListingCard from './listing/AdminListingCard'
import { useCallback, useEffect, useState } from 'react'


export default  function AdminListing() {
    const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true)

   const GetListing = async () => {
    try {
      const response = await fetch("/api/auth/admin/listings", {
        method: "GET",
      });
      setLoading(true)
      const result = await response.json();
      if(result.listings){
        setLoading(false)
        setListing(result.listings)
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  useEffect(() => {
    GetListing();
  }, []);
  if(loading === true){
    return (
      <div className='min-h-screen w-full flex justify-center items-center text-center pb-36'>
        <p className='text-2xl md:text-6xl font-semibold'>Loading...</p>
      </div>
    )
  }
  return (
    <div className='min-h-screen w-full px-2 md:px-28  flex gap-5 justify-evenly flex-wrap p-5'>
      {listing.map((item)=>(
        <AdminListingCard key={item.id} title={item.title} location={item.location} price={item.price}/>
      ))}
      
      {/* <AdminListingCard/>
      <AdminListingCard/>
       <AdminListingCard/>
      <AdminListingCard/>
      <AdminListingCard/> */}
    </div>
  )
}
