"use client";
import { StateContext } from "@/context/StateContextProvider";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import GoogleMap from "../GoogleMap";
import Link from "next/link";
import { useSession } from "next-auth/react";

function ListingDetail() {
  const session = useSession();
  // const { loading, setLoading } = useContext(StateContext);
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({});
  const [image, setImage] = useState([]);
  const { id } = useParams();
  const router = useRouter();
  const agentId = session?.data?.user?.id;

  const GetListing = useCallback(async () => {
    try {
      const response = await axios.get(`/api/auth/listing/${id}`);
      setLoading(true)
      if (response.statusText === "OK") {
        setLoading(false)
        setData(response.data.listing);
        setImage(response.data.listing.images);
      }
    } catch (error) {
      toast.error(error);
    }
  }, []);
  const DeleteListing = async () => {
    const listingId = id;

    try {
      const response = await axios.delete(
        `/api/auth/agent/listing/${listingId}`,
        {
          data: { agentId },
        }
      );
      if (response.data.message) {
        toast.success(response.data.message);
        router.push("/");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
      GetListing();
  }, []);
  if (loading == true) {
    return (
      <div>
        <h1 className="text-5xl font-bold text-center min-h-screen mt-20">
          Loading...
        </h1>
      </div>
    );
  }
  return (
    <div className="p-8 md:p-14 md:px-32 flex flex-col gap-5 min-h-screen mb-10">
      <div className="-mt-8 flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold">{data.title}</h1>
          <p className="text-gray-400">{data.location}</p>
        </div>
        {session?.data?.user?.role === "AGENT" && (
          <div className="text-center items-center space-x-2">
            <Link
              href={`/agent/listing/${data.id}`}
              className="bg-black text-white p-2 rounded-2xl cursor-pointer hover:bg-slate-700 transition-all duration-300"
            >
              Make Changes
            </Link>
            <button
              onClick={DeleteListing}
              className="bg-red-600 text-white py-1.5 px-5 rounded-2xl cursor-pointer hover:bg-red-700 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col h-96 gap-5 md:min-h-screen md:-mb-44">
        <div className="image h-96 md:h-[500px] flex flex-col w-full  md:grid grid-cols-5 gap-10 md:gap-5">
          <div className="h-full w-full col-span-4 ">
            <img
              // {...image? src={`${image[0]}`}: src={'/mumbai.png'}}
              src={`${image ? image[0] : "/mumbai.png"}`}
              className="w-full h-96 md:h-[520px] rounded-xl object-fill"
              alt=""
            />
          </div>
          <div className="md:h-full h-52 w-full hidden  col-span-1 md:flex flex-row  md:flex-col gap-5 ">
            {image?.slice(1).map((item, indx) => (
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
                    src="/profile.png"
                    className="h-10 w-10 rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-xl">{data?.owner?.name}</h1>
                  <p>{data?.owner?.phone}</p>
                </div>
              </div>
              <Link
                href={`/contact/${data?.id}`}
                className="border border-gray-400 px-7 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Immenties */}
          <div className="space-y-5 border-b border-gray-300 pb-5">
            <h1 className="text-3xl">Facility</h1>
            <div className="grid grid-cols-2 gap-5">
              {data?.amenities?.map((item, index) => (
                <h1 key={index}>{item}</h1>
              ))}
            </div>
          </div>
        </div>
        {/* <-- BOOKING SESCTION --> */}
        
        {/* <div className="bg-green-400 w-full h-full col-span-2 rounded-md">
          <h1>Bookings</h1>
        </div> */}
      </div>
      {/* Location */}
      {/* <div className=" w-full h-96 md:h-[500px] mb-5 space-y-2">

        <div className="">
          <h1 className="text-3xl font-semibold">Location</h1>
          <p className="text-gray-500">Mumbai</p>
        </div>
        <div className="bg-black w-full h-52 md:h-full rounded-xl"></div>
      </div> */}
      <GoogleMap />
    </div>
  );
}

export default memo(ListingDetail);

// AIzaSyAluLDtPEXOzHy2-ctlRGbHWPIp-Kmrn6g
