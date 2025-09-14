'use client'
import React, { useCallback, useRef } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import SignInput from '../signin/SignInput'
import SignButton from '../signin/SignButton'

export default function SignUpPage() {
  const emailRef = useRef("")
  const nameRef = useRef("")
  const passwordRef = useRef("")
  const phoneRef = useRef("")
  const roleRef = useRef("")
  const router = useRouter()


  const HandleSignup =useCallback( async(e)=> {
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
    }catch(error){
      toast.error(error)
    }
  },[])

  return (
     <div className="min-h-screen w-full flex justify-between lg:gap-10 lg:p-20 lg:pr-0">
      <div className=" w-full flex flex-col justify-center items-center h-screen pb-10">
        <div className=" space-y-10 w-full p-5 lg:p-0 lg:w-1/2">
          <div>
            <h1  className="text-4xl font-semibold text-black-100">Create new account</h1>
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
          <div className='mx-auto w-full gap-16 flex flex-col justify-center items-center '>
            <SignButton title={'Create Account'} onclick={HandleSignup}/>
              <p>Already have an account ?<Link href={"/signin"} className="text-blue-100 font-semibold">SignIn</Link></p>
          </div>
        </div>
      </div>
      <div className=" w-full h-screen hidden md:flex">
        <img src="/login-page.png" className="w-full h-full rounded-l-3xl" alt="" />
      </div>
    </div>
  )
}
