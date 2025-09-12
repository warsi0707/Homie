'use client'
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function GoogleMap({city}) {
  const myCity = city?.split(',')[0].trim()
  const [coords, setCoords] = useState(null)
     const mapContainer = useRef(null);
    const map = useRef(null);
    const zoom = 14;
    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

   
    useEffect(()=>{
      if(!city || !myCity) return;
    
      async function fetchCoords() {
        
        try{
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${myCity}&limit=1&appid=${process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY}`)
          const result = await response.json()
          console.log(result)
          if(result && result.length >0){
            setCoords({
              lat: Number(result[0].lat),
              lon: Number(result[0].lon)
            })
          }
        }catch(error){
          console.error(error)
        }
      }
      fetchCoords()
    },[city])
  
    useEffect(() => {
      if(!coords|| !mapContainer.current || map.current) return;
    
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [coords.lon, coords.lat],
      zoom: zoom
    });
    // return ()=>{
    //   if (map.current) {
    //   map.current.remove();
    //   map.current = null;
    // }
    // }
  
  }, [coords]);
  if (!coords) return <p className='text-4xl font-semibold text-center'>Loading map...</p>;
  return (
    <div id='my-map' ref={mapContainer}  className="w-full h-96   rounded-2xl ">
       
    </div>
  )
}
  