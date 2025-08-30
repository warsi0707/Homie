import { prisma } from "@/lib/PrismaProvider"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
    const {agentId} = await headers()
    try{
   
        const inquiries = await prisma.inquiry.findMany({
            where: {
                agentId: agentId
            },
            include: {
                property: true
            }
        })
        if(inquiries.length === 0){
            return NextResponse.json({
                message: "No inquiries found",
                inquiries: []
            })
        }
        return NextResponse.json({
            inquiries: inquiries
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}