"use client";
import React, { useCallback, useState } from "react";
import LisitngButton from "./LisitngButton";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ListingInput from "./ListingInput";

export default function PostListing() {
  const session = useSession();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const [imageInput, setImageInput] = useState("");
  const [amenityInput, setAmenityInput] = useState("");
  const agentId = session?.data?.user?.id;
  const router = useRouter();

  const addImage = () => {
    setImages([...images, imageInput]);
    toast.success("Image added");
  };

  const addAmenity = () => {
    setAmenities([...amenities, amenityInput]);
  };
  const handlDeleteAmenties = (idx) => {
    setAmenities(amenities.filter((item) => item !== amenities[idx]));
  };

  const HandlePostListing =useCallback( async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      location,
      price,
      area,
      images,
      amenities,
      agentId,
    };

    try {
      const response = await axios.post("/api/auth/agent/listing", data);
      if (response.data.message) {
        toast.success(response.data.message);
        router.push("/");
      }
      if (response.data.error) {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error);
    }
  },[])
  return (
    <div className="min-h-screen w-full bg-black text-white border-b">
      <div className="w-full px-5 md:w-[700px] mx-auto h-screen flex flex-col gap-20 justify-center">
        <div className="flex flex-col gap-5 items-center text-center -mt-20">
          <h1 className="text-2xl md:text-4xl font-semibold">
            POST YOUR LISTING
          </h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            non assumenda, laborum obcaecati maiores atque officiis numquam,
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <ListingInput values={title}  handleChange={(e) => setTitle(e.target.value)}  placeholder={"Listing Title"}  type={"text"}/>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <ListingInput values={location}  handleChange={(e) => setLocation(e.target.value)}  placeholder={"Location"}  type={"text"}/>
            <ListingInput values={price}  handleChange={(e) => setPrice(e.target.value)}  placeholder={"Price"}  type={"number"}/>
            <ListingInput values={area}  handleChange={(e) => setArea(e.target.value)}  placeholder={"Area"}  type={"number"}/>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 ml-5">
              {amenities &&
                amenities.map((item, idx) => (
                    <p key={idx} className="bg-blue-300 text-black px-2 rounded-md">{item}
                    <button onClick={() => handlDeleteAmenties(idx)} className="cursor-pointer text-red-500 pl-2">X</button>
                  </p>
                ))}
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
          </div>
            <div>
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
            </div>
            <ListingInput values={description}  handleChange={(e) => setDescription(e.target.value)}  placeholder={"Description"}  type={"text"}/>

          <div className="mx-auto">
            <LisitngButton onclick={HandlePostListing} />
          </div>
        </div>
      </div>
    </div>
  );
}
