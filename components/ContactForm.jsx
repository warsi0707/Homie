"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { memo, useRef } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");
  const { listingId } = useParams();
  const session = useSession()
  const agentId = session?.data?.user?.id
  const router = useRouter()

  
  const HandleInquiry = async (e) => {
    
    e.preventDefault();
    const name= nameRef.current.value
    const email= emailRef.current.value
    const phone= phoneRef.current.value
    const message= messageRef.current.value

    try {
      const response = await axios.post("/api/auth/contact", { name, email, phone, message, propertyId:listingId,agentId });
      if(response.data.message){
        toast.success(response.data.message)
        router.push(`/listing/${listingId}`)
      }else{
        toast.error(response.data.error)
        router.push(`/listing/${listingId}`)
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white border-b">
      <div className="w-full px-5 md:w-[700px] mx-auto h-screen flex flex-col gap-20 justify-center">
        <div className="flex flex-col gap-5 items-center text-center -mt-20">
          <h1 className="text-2xl md:text-4xl font-semibold">GET IN TOUCH</h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            non assumenda, laborum obcaecati maiores atque officiis numquam,
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-8">
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <input
            ref={nameRef}
              type="text"
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
              placeholder="Your name"
            />
            <input
            ref={emailRef}
              type="text"
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-8">
            <input
            ref={phoneRef}
              type="number"
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
              placeholder="Mobile number"
            />
             <input
             ref={messageRef}
              type="text"
              className="border border-gray-500 p-2 md:p-4 w-full focus:border-white rounded-full"
              placeholder="Your Message"
            />
          </div>
          <div className="mx-auto">
            <button
              onClick={HandleInquiry}
              className="bg-slate-900 p-2 md:p-3 border-t border-gray-400 px-10 md:px-16 cursor-pointer rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ContactForm);
