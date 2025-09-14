import GetListing from '@/lib/GetListing'
import ListingCard from '../listing/ListingCard'
import * as motion from "motion/react-client";
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";


export default async function ListingPage() {
  const data = await GetListing()
  
  return (
    <div id='listing'>
      <div className='flex w-full justify-between items-center text-center p-10'>
        <div className='flex flex-col  items-start'>
            <p className='text-xl text-gray-400'>Discover</p>
            <h1 className='text-xl sm:text-4xl font-semibold'>Our Latest Listings</h1>
        </div>
        <div>
           <Link href={"/listing"} className='border-2 border-blue-100 px-2 md:p-2 md:px-8 rounded-full md:text-xl text-blue-100 text-center flex items-center gap-2 hover:bg-blue-100 hover:text-white transition-all duration-300'><p>See All Listings</p> <MdArrowOutward/></Link>
        </div>
      </div>
      <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}
      className='flex flex-wrap justify-center md:justify-between gap-10 p-10 py-16'>
        {data?.map((item)=> (
          <ListingCard key={item.id} id={item.id} title={item.title} location={item.location} price={item.price} image={item.images[0]}/>
        ))}
        
      </motion.div>
    </div>
  )
}
