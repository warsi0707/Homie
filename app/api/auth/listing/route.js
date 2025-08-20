import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, description, location, area, price, images, ownerId ,amenities} = await req.json()
    console.log(title, description, location, area, price, images, ownerId)
    // try{

    const listing = await prisma.property.create({
        data: {
            title,
            description,
            location,
            price,
            area,
            images: {
                set: images
            },
            amenities: {
                set: amenities
            },
            ownerId: ownerId
        }
    })
    return NextResponse.json({
        message: "Listing Posted"
    })
    // }catch(error){
    //     return NextResponse.json({
    //         error: error
    //     })
    // }

}
export async function GET(req) {
    try {
        const listings = await prisma.property.findMany({
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
        return NextResponse.json(listings)
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}