import { prisma } from "@/lib/PrismaProvider"
import { headers } from "next/headers";
import { NextResponse } from "next/server"


export async function PUT(req, { params }) {
    const { listingId } = await params;
    const { title, description, location, area, price, images, amenities, agentId } = await req.json()
    console.log(title, description, location, area, price, images, amenities, agentId)
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
export async function DELETE(req, { params }) {
    const { agentId } = await req.json()
    const { listingId } = await params;
    console.log(agentId)

    try {
        const listing = await prisma.property.findFirst({
            where: {
                id: listingId,
                ownerId: agentId
            }
        })
        if (!listing) {
            return NextResponse.json({
                error: "Property not found or unauthorised"
            },{status: 404})
        }
        if (listing) {
            await prisma.property.delete({
                where: {
                    id: listingId
                }
            })
            return NextResponse.json({
                message: "Propert deleted",
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: error
        },{status: 400})
    }
}