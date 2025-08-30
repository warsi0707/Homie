import GetListing from '@/lib/GetListing'
import ListingCard from '../listing/ListingCard'
import * as motion from "motion/react-client";


export default async function ListingPage() {
  const data = await GetListing()
  return (
    <div id='listing'>
      <div className='flex justify-between items-center text-center'>
        <div className='flex flex-col  items-start'>
            <p className='text-xl text-gray-400'>Discover</p>
            <h1 className='text-xl sm:text-4xl font-semibold'>Our Latest Listings</h1>
        </div>
        <div>
            <button className='bg-black text-white p-3 px-8 text-xl hidden sm:flex'>All</button>
        </div>
      </div>
      <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      className='flex flex-wrap justify-center md:justify-between gap-10 py-16'>
        {data?.map((item)=> (
          <ListingCard key={item.id} id={item.id} title={item.title} location={item.location} price={item.price} image={item.images[0]}/>
        ))}
        
      </motion.div>
    </div>
  )
}
