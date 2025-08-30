import React from 'react'

export default function LocationCard({city, image}) {
  return (
     <div className="relative w-96 h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer group">
      {/* Background Image */}
      <img src={image} alt="" className="object-cover transition-transform duration-500 group-hover:scale-110 h-full w-full" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-2xl font-semibold">{city}</h2>
        <p className="text-sm">77 properties</p>
      </div>
    </div>
  )
}
