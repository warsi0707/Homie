import Link from "next/link";
import { memo } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
 function MenuBarLink({path, title,handleMenu}) {
  return (
     <Link href={`${path}`} onClick={handleMenu} className="flex items-center justify-between py-2 text-lg md:text-xl hover:bg-gray-100 hover:text-white px-5 rounded-sm transition-all duration-300"><p>{title}</p> <IoArrowForwardSharp/></Link>
  );
}
export default memo(MenuBarLink)