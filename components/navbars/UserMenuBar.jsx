'use client'
import { RiBuilding2Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import MenuBarLink from './MenuBarLink';
import { memo } from 'react';
import { FaHeart } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { useSession } from "next-auth/react";
import * as motion from "motion/react-client"

function UserMenuBar({handleLogout}) {
    const session = useSession()
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.7}}
    className="bg-white border border-gray-300 flex flex-col justify-between rounded-b-2xl w-64 overflow-hidden   absolute right-10  sm:w-72 sm:h-72 p-4">
      <div>
         <div className="flex items-center border-b border-gray-300 pb-3 gap-3">
          <img className="h-12 w-12 rounded-full" src={`${session?.data?.user?.image ? session?.data?.user?.image : "/profile.png"}`} alt="" />
          <div>
            <h1 className="font-semibold sm:text-xl">{session?.data?.user?.name}</h1>
            <p className="text-gray-600 sm:text-sm">{session?.data?.user?.email}</p>
          </div>
        </div>
        <div className="space-y-2">
            {session?.data?.user?.role === "AGENT" ?
            <>
                <MenuBarLink title={"Post Listing"} path={"/agent/listing"} icons={<RiBuilding2Line/>}/>
                <MenuBarLink title={"Inquery"} path={"/agent/inquiry"} icons={<IoMdContacts/>}/>
            </> :
            <>
                <MenuBarLink title={"Saved listing"} path={"/"} icons={<FaHeart/>}/>
            </>
            }
            
        </div>
      </div>
      <div className="border-t border-gray-300">
        <button onClick={handleLogout} className="flex items-center sm:text-xl gap-3 py-3 cursor-pointer text-gray-500 hover:text-black">
          <p><CiLogout/></p>
          <p>Logout</p>
        </button>
      </div>
    </motion.div>
  )
}

export default memo(UserMenuBar)