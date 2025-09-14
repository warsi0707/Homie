'use client'
import Link from "next/link";
import React, { useCallback, useRef } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react"
import SignInput from "../signin/SignInput";
import SignButton from "../signin/SignButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


export default function SigninPage() {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const HandleSignin =useCallback(async(e)=>{
    e.preventDefault()
   
    try{
       const email = emailRef.current.value;
    const password = passwordRef.current.value;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: '/',
       
      })
      if(response?.error){
        toast.error(response.error)
      }else{
        toast.success("Welcome to Homie")
      }
    }catch(error){
      toast.error(error)
    }
  },[])
  return (
    <div className="min-h-screen w-full flex justify-between gap-10 md:p-20 pr-0">
      <div className=" w-full flex flex-col justify-center items-center h-screen pb-10">
        <div className="w-96 space-y-10">
          <div className="flex justify-center items-center">
            <h1  className="text-5xl font-semibold">Log In</h1>
          </div>
          <div className="flex flex-col gap-2">
           <SignInput refs={emailRef} label={"Email"} placeholder={"john@gamil.com"} type={'text'}/>
           <SignInput refs={passwordRef} label={"Password"} placeholder={"john@123"} type={'Password'}/>
          </div>
              <SignButton title={"Log In"} onclick={HandleSignin}/>
          <div className="border-b flex justify-center"><p className="-mb-3 bg-white px-4 text-gray-100">OR CONTINUE WITH</p></div>
          <div className="flex justify-evenly text-4xl w-full">
            <button onClick={()=> signIn('google')} className="cursor-pointer"><FcGoogle/></button>
            <button  onClick={()=> signIn('github')} className="cursor-pointer"><FaGithub/></button>
          </div>
          <p className="text-center">Don't have an account ?<Link href={"/signup"} className="text-blue-100 font-bold">Signup</Link></p>
          <div>
           
          </div>
        </div>
      </div>
     
      <div className=" w-full h-screen hidden md:flex">
        <img src="/login-page.png" className="w-full h-full rounded-l-3xl" alt="" />
      </div>
    </div>
  );
}
