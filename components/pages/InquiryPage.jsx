"use client";
import React, { useContext, useEffect, useState } from "react";
import ContactCard from "../ContactCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import { StateContext } from "@/context/StateContextProvider";
import toast from "react-hot-toast";

export default function InquiryPage() {
  const session = useSession();
  console.log(session);
  const [contacts, setContacts] = useState([]);
  const { loading, setLoading } = useContext(StateContext);
  const agentId = session?.data?.user?.id

  const HandleContacts = async () => {
    try {
      const response = await axios.get("/api/auth/agent/inquiry", {
        headers: {
          agentId: agentId
        },
      });
      console.log(response.data.inquiries.map((item)=> item))
      setLoading(true);
      if (response.statusText == 'OK') {
        setLoading(false)
        setContacts(response.data);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const HandleDeleteContact =async(id)=>{
    try{
        const response = await axios.delete(`/api/auth/agent/inquiry/${id}`)
        setLoading(true)
        if(response.data.message){
            setLoading(false)
            toast.success(response.data.message)
            HandleContacts()
        }else{
            toast.error(response.data.error)
        }
    }catch(error){
        toast.error(error)
    }
  }
  useEffect(() => {
    // if (session?.status === "authenticated") {
      HandleContacts();
    // }
  }, []);
  if(loading){
    return (
         <div className="min-h-screen w-full flex justify-center items-center pb-36">
            <h1 className="text-5xl font-semibold">Loading...</h1>
        </div>
    )
  }
  if(contacts?.inquiries==0){
    return (
        <div className="min-h-screen w-full flex justify-center items-center pb-36">
            <h1 className="text-5xl font-semibold">No contacts </h1>
        </div>
    )
  }else{
  return (
    <div className="min-h-screen w-full sm:px-20 mx-auto gap-5 py-5 flex flex-wrap justify-center md:justify-between items-center">
        {contacts?.inquiries?.map((item)=> (
              <ContactCard key={item.id} item={item} onDelete={()=> HandleDeleteContact(item.id)} />
        ))}
    </div>
  );
}
}
