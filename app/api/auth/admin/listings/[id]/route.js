import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export default async function GET(req, {params}){
    const {id} = await params;
    try{
        const listing = await prisma.listing.findUnique({
            where: {
                id: id
            }
        });
        if(!listing) {
            return NextResponse.json({
                error: "Listing not found"
            })
        }
        return NextResponse.json({
            listing: listing
        })
    }catch(error){
        return NextResponse.json({
            error:error
        })
    }
}
