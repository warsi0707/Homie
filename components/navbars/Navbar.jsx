"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import UserMenuBar from "./UserMenuBar";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const session = useSession();
  const [userMenu, setUserMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const HandleSignOut =()=>{
    toast.success("Signout")
    setTimeout(() => {
      signOut()
    }, 1000); 
  }
  useEffect(()=>{
    const HandleScroll =()=>{
      if(window.scrollY >1080){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', HandleScroll)
    return ()=> window.removeEventListener('scroll', HandleScroll)
  },[])
  return (
    <>
    <div className={`p-7 w-full lg:px-10 flex justify-between items-center z-50 shadow-md ${isScrolled == true ? " sticky top-2 bg-black/85 backdrop-blur-md text-white": "flex"}`}>
      <Link
        href={"/"}
        className="flex text-2xl font-semibold justify-center items-center gap-2"
      >
        <p>
          <HiOutlineHomeModern />
        </p>
        <h1 >Homie</h1>
      </Link>
      {session?.data?.user?.role !== 'ADMIN' &&
      <div className="gap-6 text-black-100 hidden md:flex ">
       
        <Link href={"#about"} className="text-black-100"> About</Link>
        <Link href={"#listing"}> Listing</Link>
        <Link href={"#service"}> Services</Link>
        <Link href={"#location"}> Location</Link>
      </div>
      }
   
      {/* {session?.status === "authenticated" && (
        <div className="flex justify-center items-center gap-2">
            <button onClick={()=> setUserMenu(!userMenu)} className="cursor-pointer">
              <img className="h-10 w-10 rounded-full" src={`${session?.data?.user?.image ? session?.data?.user?.image: "/profile.png"}`} alt="" />
            </button>
        </div>
      )} */}
      <div className="flex justify-center items-center gap-5">
      {session?.status === "unauthenticated" && (
        <>
        <Link href={"/signin"} className="text-xl">
          <button
            className="hidden md:flex cursor-pointer border px-5 py-2 text-white  rounded-3xl bg-blue-100 "
          >
            Login / Register
          </button>
        </Link>
        </>
      )}
      {userMenu == true?
        <button onClick={()=> setUserMenu(!userMenu)} className="flex  cursor-pointer text-3xl">
            <RxCross2 />
          </button>:
          <button onClick={()=> setUserMenu(!userMenu)} className="flex  cursor-pointer text-2xl">
             <FaBars />
          </button>
}
      </div>
    </div>
    {userMenu &&
    <UserMenuBar handleLogout={HandleSignOut} handleMenu={()=> setUserMenu(!userMenu)}/>
    }
    </>
  );
}
