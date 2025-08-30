import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";


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