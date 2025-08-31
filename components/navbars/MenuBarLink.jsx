import Link from "next/link";
import { memo } from "react";

 function MenuBarLink({path, icons,title}) {
  return (
    <Link href={path} className="w-full p-1 flex items-center gap-2 sm:text-2xl font-thin text-gray-500 hover:text-black ">
        <p>{icons}</p>
        <h1>{title}</h1>
    </Link>
  );
}
export default memo(MenuBarLink)