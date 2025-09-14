import ListingsCard from '@/components/listing/ListingsCard'
import { prisma } from '@/lib/PrismaProvider'
import React from 'react'

export default async function page() {
    const data = await prisma.property.findMany({})
    console.log(data)
    return (
        <div className='min-h-screen w-full'>
            <h1 className='p-6 text-blue-100 font-bold text-xl lg:text-4xl lg:ml-14'>Featured Property</h1>
            <div className='min-h-screen pb-32 w-full p-5 flex gap-32 justify-center md:justify-evenly flex-wrap'>
                {data.map((item)=> (
                    <ListingsCard key={item.id} id={item.id} title={item.title} location={item.location} price={item.price} />
                ))}
            </div>
        </div>
    )
}
