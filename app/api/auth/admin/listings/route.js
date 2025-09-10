import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"

export  async function GET(req) {
    try{
        const listings = await prisma.property.findMany({})
        console.log(listings)
        if(listings.length === 0) {
            return NextResponse.json({
                listings: [],
                message: "No listings found"
            })
        }
        return NextResponse.json({
            listings: listings
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }
}