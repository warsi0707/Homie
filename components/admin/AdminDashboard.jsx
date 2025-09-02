'use client'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import SideLink from './SideLink';
import { BsBuildings } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import AdminListing from "./AdminListing";
import AdminAgents from "./AdminAgents";
import AdminUsers from "./AdminUsers";
import AdminLocation from "./AdminLocation";
import { FaUsers } from "react-icons/fa6";
import AdminCard from "./AdminCard";

export default function AdminDashboard() {
  const [menu, setMenu] = useState('dashboard')
  return (
    <div className='min-h-screen w-full grid grid-cols-10 gap-5'>
      <div className="sidebar col-span-2 text-white bg-black flex flex-col h-screen justify-between p-5 items-center">
        <div className='flex flex-col gap-10 w-full'>
          <h1 className='text-3xl'>ADMIN</h1>
          <div className='flex flex-col text-start items-start justify-start w-full gap-2'>
            <SideLink handleMenu={()=> setMenu('dashboard')} icon={<RiDashboardHorizontalLine/>} title={'Dashboard'}/>
            <SideLink handleMenu={()=> setMenu('listings')} icon={<BsBuildings/>} title={'Listings'}/>
            <SideLink handleMenu={()=> setMenu('agents')} icon={<RiUserStarLine/>} title={'Agents'}/>
            <SideLink handleMenu={()=> setMenu('users')} icon={<TbUsers/>} title={'Users'}/>
            <SideLink handleMenu={()=> setMenu('locations')} icon={<IoLocationSharp/>} title={'Locations'}/>
          </div>
        </div>
        <div className='mb-20 flex flex-col gap-5 sm:flex-row sm:justify-between items-center w-full'>
          <img src="/profile.png" className='w-10 h-10 rounded-full' alt="" />
          <h1>Samir warsi</h1>
          <button>Logout</button>
        </div>
      </div>
      {menu=== 'dashboard' && 
        <div className="main-menu col-span-8 flex flex-wrap justify-center sm:justify-between mt-10">
         <AdminCard/>
         <AdminCard/>
         <AdminCard/>
        </div>
      }
      {menu === 'listings' && <AdminListing/>}
      {menu === 'agents' && <AdminAgents/>}
      {menu === 'users' && <AdminUsers/>}
      {menu === 'locations' && <AdminLocation/>}
    </div>
  )
}
