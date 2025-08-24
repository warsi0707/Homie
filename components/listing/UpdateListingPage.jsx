"use client";

import { useSession } from "next-auth/react";
import LisitngButton from "./LisitngButton";
import { useState } from "react";
import GetListing from "@/lib/GetListing";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

export default function UpdateListingPage() {
  const session = useSession();
  const {listingId} = useParams()
  console.log(listingId)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const [imageInput, setImageInput] = useState("");
  const [amenityInput, setAmenityInput] = useState("");

  const Listing =async()=>{
    try{
        const response = await fetch(`/api/auth/agent/listing/${listingId}`)
        console.log(response)
    }catch(error){
        toast.error(error)
    }
  }
  const addImage = () => {
    setImages([...images, imageInput]);
    toast.success("Image added");
  };

  const addAmenity = () => {
    setAmenities([...amenities, amenityInput]);
    toast.success("Ammenties added");
  };

  return (
    <div className="min-h-screen w-full bg-black text-white border-b">
      <div className="w-full px-5 md:w-[700px] mx-auto h-screen flex flex-col gap-20 justify-center">
        <div className="flex flex-col gap-5 items-center text-center -mt-20">
          <h1 className="text-2xl md:text-4xl font-semibold">
            UPDATE YOUR LISTING
          </h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            non assumenda, laborum obcaecati maiores atque officiis numquam,
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Listing Title"}
              type={"text"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={"Location"}
              type={"text"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder={"Price"}
              type={"number"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />
            <input
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={"Area"}
              type={"number"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <input
              value={amenityInput}
              onChange={(e) => setAmenityInput(e.target.value)}
              placeholder={"Ammenties"}
              type={"text"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />

            <button
              className="bg-slate-700 px-3 rounded-full cursor-pointer"
              onClick={addAmenity}
            >
              Add
            </button>
          </div>

          <div className="flex gap-2">
            <input
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              placeholder={"Images"}
              type={"text"}
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
            />

            <button
              className="bg-slate-700 px-3 rounded-full cursor-pointer"
              onClick={addImage}
            >
              Add
            </button>
          </div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"Description"}
            type={"text"}
            className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
          />

          <div className="mx-auto">
            <LisitngButton />
          </div>
        </div>
      </div>
    </div>
  );
}
