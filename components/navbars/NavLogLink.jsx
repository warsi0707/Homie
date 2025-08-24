import Link from 'next/link'
import * as motion from "motion/react-client";

function NavLogLink({links, title}) {
  return (
    <Link href={links} >
       
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex cursor-pointer border px-4 py-1.5 hover:bg-black hover:text-white "
        >
         {title}
        </motion.button>
       
      </Link>
  )
}

export default NavLogLink
