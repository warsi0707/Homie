import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"


export async function  PUT(req,{params}) {
    const { listingId } = await params;
    const { title, description, location, area, price, images,amenities, agentId } = await req.json()
    try {
        const listing = await prisma.property.update({
            where: {
                id: listingId
            },
            data: {
                title,
                description,
                location,
                area,
                price,
                images: images,
                amenities: amenities,
                ownerId: agentId
            }
        })
        return NextResponse.json({
            message: "Listing Updated"
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function DELETE(req, {params}) {
    const { listingId } = await params;
    const {agentId} = await req.json()
    console.log(agentId)
    try {
        const listing = await prisma.property.delete({
            where: {
                id: listingId,
                ownerId: agentId
            }
        })
        return NextResponse.json({
            message: "Listing Deleted"
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}