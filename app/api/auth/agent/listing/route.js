import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, description, location, area, price, images, agentId ,amenities} = await req.json()
    if(!title || !description || !location || !area || !price || !images || !agentId){
        return NextResponse.json({
            error: "Missing required fields"
        })
    }
    try{

    const listing = await prisma.property.create({
        data: {
            title,
            description,
            location,
            price: parseFloat(price),
            area: parseFloat(area),
            images: images,
            amenities: amenities,
            ownerId: agentId
        }
    })
    return NextResponse.json({
        message: "Listing Posted"
    })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }

}

