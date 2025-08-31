'use client'
import Link from "next/link";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react"
import SignInput from "../signin/SignInput";
import SignButton from "../signin/SignButton";

export default function SigninPage() {
  const emailRef = useRef("")
  const passwordRef = useRef("")

  const HandleSignin =async(e)=>{
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
      const result = response
      if(response?.error){
        toast.error(response.error)
      }else{
        toast.success("Welcome to Homie")
      }
    }catch(error){
      toast.error(error)
    }
  }
  return (
    <div className="min-h-screen w-full flex justify-between gap-10 p-20 ">
      <div className=" w-full flex flex-col justify-center items-center h-screen pb-10">
        <div className="w-96 space-y-10">
          <div>
            <h1  className="text-5xl font-semibold">Welcome Back</h1>
            <p className="text-slate-400">Hey, Welcome back to your special place</p>
          </div>
          <div className="flex flex-col gap-2">
           <SignInput refs={emailRef} label={"Email"} placeholder={"john@gamil.com"} type={'text'}/>
           <SignInput refs={passwordRef} label={"Password"} placeholder={"john@123"} type={'Password'}/>
          </div>
           
          <div className="flex justify-between">
            <SignButton onclick={HandleSignin} title={"Sign In"}/>
            <SignButton onclick={()=> signIn('google')} title={"Google"}/>
            <SignButton onclick={()=> signIn('github')} title={"Github"}/>
          </div>
          <div>
            <p>Don't have an account ?<Link href={"/signup"} className="underline">Signup</Link></p>
         
          </div>
        </div>
      </div>
     
      <div className="bg-green-500 w-full h-screen hidden md:flex">
        <img src="/login.png" className="w-full h-full" alt="" />
      </div>
    </div>
  );
}
