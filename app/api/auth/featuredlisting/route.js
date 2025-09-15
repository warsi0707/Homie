import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function GET(req) {
    try{
        const featuredListings = await prisma.property.findMany({
            take: 6,
            orderBy: {
                createdAt: 'desc'
            }
        })
        return NextResponse.json({
            listings: featuredListings
        })
    }catch(error){
        return NextResponse.json({
            error: error.message
        })
    }
    
}