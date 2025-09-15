'use client'
import { GetSavedListing } from '@/lib/SavedListing';
import React, { useEffect, useState } from 'react'
import ListingsCard from './listing/ListingsCard';

export default function SavedListing() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const savedData = GetSavedListing();
        console.log(savedData);
        setData(savedData);
    },[])
  return (
     <div className='min-h-screen w-full p-5 flex gap-32 justify-center md:justify-evenly flex-wrap'>
        {data.length > 0 ? data.map((item) => (
            <ListingsCard key={item.id} id={item.id} title={item.title} location={item.location} price={item.price} image={item.image}  />
        )) : (
          <p className='text-2xl md:text-5xl font-bold text-black-100 mt-20'>No saved listings found.</p>
        )}
    </div>
  )
}
