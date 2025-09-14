"use client";
import MenuBarLink from "./MenuBarLink";
import { memo } from "react";
import { useSession } from "next-auth/react";
import * as motion from "motion/react-client";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

function UserMenuBar({ handleLogout, handleMenu }) {
  const session = useSession();
  const userName = session?.data?.user?.name.split('')[0].toLocaleUpperCase() + session?.data?.user?.name.slice(1)
  
  return (
    <div className="bg-slate-100 fixed h-full z-50 top-0 p-3 md:p-10 w-full md:w-1/2 right-0 ">
      <div className="flex justify-between border-b border-b-gray-100 p-2.5">
        <div className="flex items-center text-xl md:text-3xl text-center ">
          <p><HiOutlineHomeModern /></p>
          <h1>Homie</h1>
        </div>
        <button onClick={handleMenu} className="cursor-pointer text-3xl">
          <RxCross2 />
        </button>
      </div>
      <div className="py-10 space-y-5">
        {session?.status === 'authenticated' &&
          <div className="flex items-center gap-2 text-2xl px-5"> 
            <img className="h-10 w-10 rounded-full" src={`${session?.data?.user?.image ? session?.data?.user?.image: "/profile.png"}`} alt="" />
            <h1>{ session?.data?.user?.name && userName}</h1>
          </div>
        }
        <MenuBarLink title={"Home"} path={"/"} handleMenu={handleMenu}/>

        {session?.data?.user?.role === "AGENT" && (
          <>
            <MenuBarLink title={"Listings"} path={"/listing"} handleMenu={handleMenu} />
            <MenuBarLink title={"Post Listing"} path={"/agent/post-listing"} handleMenu={handleMenu}/>
            <MenuBarLink title={"Inquery"} path={"/agent/inquiry"} handleMenu={handleMenu}/>
          </>
        )}
        {session?.data?.user?.role === "ADMIN" && (
          <MenuBarLink title={"Dashboard"} path={"/admin"} handleMenu={handleMenu}/>
        )}
        {session?.status === "authenticated" ? (
          <button onClick={handleLogout}  className="flex w-full items-center justify-between py-2 text-lg md:text-xl hover:bg-red-500 cursor-pointer hover:text-white px-5 rounded-sm transition-all duration-300">
            <p>Logout</p> <IoArrowBackCircle />
          </button>
        ) : (
          <>
            <MenuBarLink title={"Signin"} path={"/signin"} handleMenu={handleMenu}/>
            <MenuBarLink title={"Signup"} path={"/signup"} handleMenu={handleMenu}/>
          </>
        )}
      </div>
    </div>
    // <motion.div
    // initial={{opacity:0}}
    // animate={{opacity:1}}
    // transition={{duration:0.7}}
    // className="bg-white border border-gray-300 flex flex-col justify-between rounded-b-2xl w-64 overflow-hidden   absolute right-10  sm:w-72 sm:h-72 p-4">
    //   <div>
    //      <div className="flex items-center border-b border-gray-300 pb-3 gap-3">
    //       <img className="h-12 w-12 rounded-full" src={`${session?.data?.user?.image ? session?.data?.user?.image : "/profile.png"}`} alt="" />
    //       <div>
    //         <h1 className="font-semibold sm:text-xl">{session?.data?.user?.name}</h1>
    //         <p className="text-gray-600 sm:text-sm">{session?.data?.user?.email}</p>
    //       </div>
    //     </div>
    //     <div className="space-y-2">
    //         {session?.data?.user?.role === "AGENT" &&
    //         <>
    //             <MenuBarLink title={"Listings"} path={"/agent/listing"} icons={<RiBuilding2Line/>}/>
    //             <MenuBarLink title={"Post Listing"} path={"/agent/post-listing"} icons={<RiBuilding2Line/>}/>
    //             <MenuBarLink title={"Inquery"} path={"/agent/inquiry"} icons={<IoMdContacts/>}/>
    //         </>
    //         }
    //         {session?.data?.user?.role === 'ADMIN' &&
    //             <>
    //               <MenuBarLink title={"Dashboard"} path={"/admin"} icons={<RiBuilding2Line/>}/>

    //             </>
    //         }

    //     </div>
    //   </div>
    //   <div className="border-t border-gray-300">
    //     <button onClick={handleLogout} className="flex items-center sm:text-xl gap-3 py-3 cursor-pointer text-gray-500 hover:text-black">
    //       <p><CiLogout/></p>
    //       <p>Logout</p>
    //     </button>
    //   </div>
    // </motion.div>
  );
}

export default memo(UserMenuBar);
