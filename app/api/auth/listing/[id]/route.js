import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    const { id } =await params;
    try {
        const listing = await prisma.property.findUnique({
            where: {
                id: id
            },
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true
                    }
                }
            }
        })
        return NextResponse.json(listing)
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function  PUT(req,{params}) {
    const { id } = await params;
    const { title, description, location, area, price, images, ownerId } = await req.json()
    try {
        const listing = await prisma.property.update({
            where: {
                id: id
            },
            data: {
                title,
                description,
                location,
                area,
                price,
                images: {
                    set: images
                },
                ownerId: ownerId
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
    const { id } = await params;
    try {
        const listing = await prisma.property.delete({
            where: {
                id: id
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