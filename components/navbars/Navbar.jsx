"use client";
import Link from "next/link";
import React from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import * as motion from "motion/react-client";
import { signOut, useSession } from "next-auth/react";
import NavLogLink from "./NavLogLink";

export default function Navbar() {
  const session = useSession();
  return (
    <div className="border-b p-7 px-10 border-gray-300 flex justify-between items-center">
      <Link
        href={"/"}
        className="flex text-xl justify-center items-center gap-2"
      >
        <p>
          <HiOutlineHomeModern />
        </p>
        <h1>Homie</h1>
      </Link>
      <div className=" gap-6 text-gray-500 hidden md:flex">
        <Link href={"#about"}> About</Link>
        <Link href={"#listing"}> Listing</Link>
        <Link href={"#service"}> Services</Link>
        <Link href={"#location"}> Location</Link>
      </div>
      {session?.data?.user?.role === "AGENT" && (
        <div className="flex gap-2">
          <NavLogLink title={"Post Listing"} links={"/listing"} />
          <NavLogLink title={"Inquery"} links={"/contact"} />
        </div>
      )}
      {session?.status === "authenticated" && (
            <motion.button
              onClick={() => signOut()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:flex cursor-pointer border px-4 py-1.5 hover:bg-black hover:text-white "
            >
              Logout
            </motion.button>
          )}

      {session?.status === "unauthenticated" && (
        <Link href={"/signin"} className="text-xl">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:flex cursor-pointer border px-4 py-1.5 hover:bg-black hover:text-white "
          >
            Sign In
          </motion.button>
          <button className="flex md:hidden cursor-pointer">
            <FaBars />
          </button>
        </Link>
      )}
    </div>
  );
}
