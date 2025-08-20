'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";

function ListingDetail() {
  const {id} = useParams()
  const [data,setData] = useState({})
  const [image, setImage] = useState([])
  console.log(data)

  const GetListing =async()=>{
    try{
      const response = await axios.get(`/api/auth/listing/${id}`)
      console.log(response)
      if(response.statusText === 'OK'){
        setData(response.data)
        setImage(response.data.images)
      }
    }catch(error){
      toast.error(error)
    }
  }
  useEffect(()=>{
    if(id){
      GetListing()
    }else{
      return
    }
    
  },[id])
  return (
    <div className="p-8 md:p-14 md:px-32 flex flex-col gap-5 min-h-screen mb-10">
      <div className="-mt-8">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <p className="text-gray-400">{data.location}</p>
      </div>
      <div className="flex flex-col h-96 gap-5 md:min-h-screen md:-mb-44">
        <div className="image h-96 md:h-[500px] flex flex-col w-full  md:grid grid-cols-5 gap-10 md:gap-5">
          <div className="h-full w-full col-span-4 ">
            <img
            // {...image? src={`${image[0]}`}: src={'/mumbai.png'}}
              src={`${image? image[0]: '/mumbai.png' }`}
              className="w-full h-96 md:h-[520px] rounded-xl object-fill"
              alt=""
            />
          </div>
          <div className="md:h-full h-52 w-full hidden  col-span-1 md:flex flex-row  md:flex-col gap-5 ">
            {image.slice(1).map((item, indx) => (
              <img
              key={indx}
              className="h-40 w-full rounded-xl object-fill"
              src={`${item}`}
              alt=""
            />
            ))}
            
            {/* <img className="h-40 w-full rounded-xl" src="/mumbai.png" alt="" />
            <img className="h-40 w-full rounded-xl" src="/mumbai.png" alt="" /> */}
          </div>
        </div>
      </div>
      <div className=" w-full h-[900px]  md:h-[500px] flex flex-col  gap-2 md:grid grid-cols-5 ">
        <div className=" w-full h-full py-2 col-span-3 md:mr-10 md:pr-28 flex flex-col gap-5">
          {/* Description */}
          <div className="space-y-3 flex flex-col justify-center items-center md:items-start border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Description</h1>
            <p className="">{data.description}</p>
          </div>
          {/* Hosted */}
          <div className="space-y-5 border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Hosted</h1>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
              <div>
                <img
                  src="/lucknow.png"
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl">{data?.owner?.name}</h1>
                <p>{data?.owner?.phone}</p>
              </div>
                </div>
                <button className="border border-gray-400 px-7 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300">Contact</button>
            </div>
            
          </div>
          {/* Immenties */}
          <div className="space-y-5 border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Facility</h1>
            <div className="grid grid-cols-2 gap-5">
            {data?.amenities?.map((item, index)=> (
              <h1 key={index}>{item}</h1>
            ))}
              
            </div>
          </div>
        </div>
        <div className="bg-green-400 w-full h-full col-span-2 rounded-md">
            <h1>Bookings</h1>
        </div>
      </div>
      {/* Location */}
      <div className=" w-full h-96 md:h-[500px] mb-5 space-y-2">
        <div className="">
          <h1 className="text-3xl font-semibold">Location</h1>
          <p className="text-gray-500">Mumbai</p>
        </div>
        <div className="bg-black w-full h-52 md:h-full rounded-xl"></div>
      </div>
    </div>
  );
}

export default memo(ListingDetail) ;
