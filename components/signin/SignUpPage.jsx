'use client'
import React, { useRef } from 'react'
import SignInput from './SignInput'
import SignButton from './SignButton'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const emailRef = useRef("")
  const nameRef = useRef("")
  const passwordRef = useRef("")
  const phoneRef = useRef("")
  const roleRef = useRef("")
  const router = useRouter()


  const HandleSignup =async(e)=> {
    e.preventDefault()
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const phone = phoneRef.current.value;
    const roles = roleRef.current.value;
    try{
      const response = await axios.post('/api/auth/signup', {email, name, password, phone, roles})
      if(response.data.message){
        toast.success(response.data.message)
        router.push("/signin")
      }
      if(response.data.error){
        toast.error(response.data.error)
      }
      console.log(response)
    }catch(error){
      toast.error(error)
    }
  }
  return (
     <div className="min-h-screen w-full flex justify-between gap-10 p-20 ">
      <div className=" w-full flex flex-col justify-center items-center h-screen pb-10">
        <div className="w-96 space-y-10">
          <div>
            <h1  className="text-5xl font-semibold">Register !</h1>
            <p className="text-slate-400">Hey, Welcome to your special place</p>
          </div>
          <div className="flex flex-col gap-2">
            <SignInput refs={nameRef} label={"Name"} placeholder={"john"} type={'text'}/>
            <SignInput refs={emailRef} label={"Email"} placeholder={"john@gamil.com"} type={'Email'}/>
            <SignInput refs={passwordRef} label={"Password"} placeholder={"john@123"} type={'Password'}/>
           <SignInput refs={phoneRef} label={"Phone"} placeholder={"+91 12456789"} type={'number'}/>
           <select ref={roleRef} className='border text-black w-full  p-2 rounded-lg'>
             <option value="">Please select role</option>
            <option value="USER">USER</option>
            <option value="AGENT">AGENT</option>
           </select>
          </div>
          <div>
            <SignButton onclick={HandleSignup} title={"SignUp"}/>
          </div>
          <div>
            <p>Already have an account ?<Link href={"/signin"} className="underline">SignIn</Link></p>
         
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-full h-screen">
        <img src="/login.png" className="w-full h-full" alt="" />
      </div>
    </div>
  )
}
