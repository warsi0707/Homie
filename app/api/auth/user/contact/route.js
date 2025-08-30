import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {name, email, phone, message,propertyId,agentId} = await req.json()
    try{
    const inquiry = await prisma.inquiry.create({
        data: {
            name,
            email,
            phone,
            message,
            propertyId,
            agentId
        }
    })
    return NextResponse.json({
        message: "Inquiry sent"
    })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}
    