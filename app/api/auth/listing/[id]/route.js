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
        return NextResponse.json({
            listing: listing
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
