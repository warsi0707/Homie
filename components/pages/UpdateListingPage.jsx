"use client";

import { useSession } from "next-auth/react";
import LisitngButton from "../listing/LisitngButton";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { StateContext } from "@/context/StateContextProvider";
import ListingInput from "../listing/ListingInput";

export default function UpdateListingPage() {
  const session = useSession();
  const { listingId } = useParams();
  const { loading, setLoading } = useContext(StateContext);

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

  const GetListing = async () => {
    try {
      const response = await axios.get(`/api/auth/listing/${listingId}`);
      setLoading(true);
      if (response.data.listing) {
        setLoading(false);
        setTitle(response.data.listing.title);
        setDescription(response.data.listing.description);
        setLocation(response.data.listing.location);
        setPrice(response.data.listing.price);
        setArea(response.data.listing.area);
        setImageInput(response.data.listing.images);
        setAmenityInput(response.data.listing.amenities);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    if (listingId) {
      GetListing();
      setLoading(false);
    } else {
      setLoading(false);
      return;
    }
  }, [listingId]);

  const HandleUpdate = async () => {
    try {
      const response = await axios.put(`/api/auth/agent/listing/${listingId}`, {
        title,
        description,
        location,
        price,
        area,
        images,
        amenities,
        agentId,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);
        router.push("/");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const addImage = () => {
    setImages([...images, imageInput]);
    toast.success("Image added");
  };

  const addAmenity = () => {
    setAmenities([...amenities, amenityInput]);
    toast.success("Ammenties added");
  };
  if (loading) {
    return (
      <div>
        <h1 className="text-6xl font-bold mx-auto mt-20">Loading...</h1>
      </div>
    );
  } 
    return (
      <div className="min-h-screen w-full text-black border-b flex p-5 pr-0">
            <div className="w-full px-20  mx-auto h-screen flex flex-col gap-20 justify-center">
              <div className="flex flex-col gap-5 items-center text-center -mt-20">
                <h1 className="text-2xl md:text-4xl font-semibold">
                  UPDATE YOUR LISTING
                </h1>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                  <ListingInput values={title} label={'Title'} handleChange={(e) => setTitle(e.target.value)}  placeholder={"Listing Title"}  type={"text"}/>
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                  <ListingInput values={location} label={'Location'} handleChange={(e) => setLocation(e.target.value)}  placeholder={"Location"}  type={"text"}/>
                  <ListingInput values={price} label={'Price'} handleChange={(e) => setPrice(e.target.value)}  placeholder={"Price"}  type={"number"}/>
                  <ListingInput values={area} label={'Area'} handleChange={(e) => setArea(e.target.value)}  placeholder={"Area"}  type={"number"}/>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 ml-5">
                    {/* {amenities &&
                      amenities.map((item, idx) => (
                          <p key={idx} className="bg-blue-300 text-black px-2 rounded-md">{item}
                          <button onClick={() => handlDeleteAmenties(idx)} className="cursor-pointer text-red-500 pl-2">X</button>
                        </p>
                      ))} */}
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                    <div className="w-full">
                      <label htmlFor="" className="text-lg">Ammenties</label>
                      <div className="flex gap-2">
                        <input
                          value={amenityInput}
                          onChange={(e) => setAmenityInput(e.target.value)}
                          placeholder={"Ammenties"}
                          type={"text"}
                          className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-xl"
                        />
                        <button
                      className="bg-blue-100 text-white px-3 rounded-full cursor-pointer"
                      onClick={addAmenity}
                    >
                      Add
                    </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
                  <div>
                    <div className="flex gap-2">
                      <div className="w-full">
                        <label htmlFor="" className="text-lg">Images</label>
                       <div className="flex gap-2">
                          <input
                          value={imageInput}
                          onChange={(e) => setImageInput(e.target.value)}
                          placeholder={"Images"}
                          type={"text"}
                          className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-xl"
                        />
                        <button
                        className="bg-blue-100 text-white 2 px-3 rounded-full cursor-pointer"
                        onClick={addImage}
                      >
                        Add
                      </button>
                       </div>
                      </div>
      
                      
                    </div>
                  </div>
                  <ListingInput values={description} label={'Description'} handleChange={(e) => setDescription(e.target.value)}  placeholder={"Description"}  type={"text"}/>
      
                <div className="mx-auto w-72">
                  <LisitngButton title={"Make Changes"} onclick={HandleUpdate} />
                </div>
              </div>
            </div>
            <div className="w-full min-h-screen">
              <img src="/login-page.png" className="w-full min-h-screen rounded-l-3xl" alt="" />
            </div>
          </div>
      // <div className="min-h-screen w-full bg-black text-white border-b">
      //   <div className="w-full px-5 md:w-[700px] mx-auto h-screen flex flex-col gap-20 justify-center">
      //     <div className="flex flex-col gap-5 items-center text-center -mt-20">
      //       <h1 className="text-2xl md:text-4xl font-semibold">
      //         UPDATE YOUR LISTING
      //       </h1>
      //       <p className="text-sm">
      //         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      //         Doloremque non assumenda, laborum obcaecati maiores atque officiis
      //         numquam,
      //       </p>
      //     </div>
      //     <div className="flex flex-col gap-2 md:gap-3">
      //       <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      //         <ListingInput
      //           values={title}
      //           handleChange={(e) => setTitle(e.target.value)}
      //           type={"text"}
      //         />
      //       </div>
      //       <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      //         <ListingInput
      //           values={location}
      //           handleChange={(e) => setLocation(e.target.value)}
      //           type={"text"}
      //         />
      //         <ListingInput
      //           values={price}
      //           handleChange={(e) => setPrice(e.target.value)}
      //           type={"number"}
      //         />
      //         <ListingInput
      //           values={area}
      //           handleChange={(e) => setArea(e.target.value)}
      //           type={"number"}
      //         />
      //       </div>
      //       {/* amenities */}
      //         <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      //         <input
      //           value={amenityInput}
      //           onChange={(e) => setAmenityInput(e.target.value)}
      //           placeholder={"Ammenties"}
      //           type={"text"}
      //           className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
      //         />

      //         <button
      //           className="bg-slate-700 px-3 rounded-full cursor-pointer"
      //           onClick={addAmenity}
      //         >
      //           Add
      //         </button>
      //       </div>

      //       {/* images */}
      //       <div className="flex gap-2">
      //         <input
      //           value={imageInput}
      //           onChange={(e) => setImageInput(e.target.value)}
      //           placeholder={"Images"}
      //           type={"text"}
      //           className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
      //         />

      //         <button
      //           className="bg-slate-700 px-3 rounded-full cursor-pointer"
      //           onClick={addImage}
      //         >
      //           Add
      //         </button>
      //       </div>
      //       {/* //description */}
      //       <ListingInput
      //         values={description}
      //         handleChange={(e) => setDescription(e.target.value)}
      //         type={"text"}
      //       />
      //       <div className="mx-auto">
      //         <LisitngButton title={"Update"} onclick={HandleUpdate} />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

