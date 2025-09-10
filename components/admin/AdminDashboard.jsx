"use client";
import { useCallback, useEffect, useState } from "react";
import AdminListing from "./AdminListing";
import AdminAgents from "./AdminAgents";
import AdminUsers from "./AdminUsers";
import AdminLocation from "./AdminLocation";
import AdminCard from "./AdminCard";

export default function AdminDashboard() {
  const [activeLink, setActivelink] = useState("dashboard");

  const navItems = [
    { name: "Dashboard", id: "dashboard" },
    { name: "Listings", id: "listings" },
    { name: "Agents", id: "agents" },
    { name: "Users", id: "users" },
    { name: "Locations", id: "locations" },
  ];
 
  

  return (
    <>
      <div className="admin-nav bg-red-600 w-full  text-white text-center flex justify-evenly ">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivelink(item.id)}
            className={`cursor-pointer ${
              activeLink === item.id ? "bg-black" : ""
            } py-3 md:px-5 w-full transition-all duration-300`}
          >
            {item.name}
          </button>
        ))}
      </div>
      {activeLink === "dashboard" && (
        <div className=" p-10 md:px-28 flex flex-wrap justify-evenly min-h-screen mx-auto">
          <AdminCard />
          <AdminCard />
          <AdminCard />
        </div>
      )}
      {activeLink === "listings" && <AdminListing />}
      {activeLink === "agents" && <AdminAgents />}
      {activeLink === "users" && <AdminUsers />}
      {activeLink === "locations" && <AdminLocation />}
    </>
  );
}
