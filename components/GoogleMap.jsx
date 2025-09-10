'use client'

import { useEffect } from "react"

export default function GoogleMap() {
  const GetMap =async()=>{
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?Mumbai&apiKey=7e532606063c4791be0a6d3149b923ba`)
    console.log(response)
  }
  useEffect(()=>{
    GetMap()
  },[])

  return (
    <div className="w-full h-96 bg-black rounded-lg overflow-hidden">
    </div>
  )
}
