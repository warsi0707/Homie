import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { message, email, phone, name, propertyId,agentId} = await req.json()
    
    if(!message || !email || !phone || !name || !propertyId || !agentId) {
        return NextResponse.json({
            error: "All fields are required or please login"
        })
    }

    try {
        const existingInquiry = await prisma.inquiry.findFirst({
            where: {
                propertyId: propertyId,
                agentId: agentId
            }
        })
        if(existingInquiry){
            return NextResponse.json({
                error: "Inquiry already exists, agent will call you shortly"
            })
        }else{
        const inquiry = await prisma.inquiry.create({
            data: {
                message,
                email,
                phone,
                name,
                propertyId:propertyId,
                agentId:agentId
            }
        })
        return NextResponse.json({
            message: "Inquiry sent"
        }) 
    }
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function GET(req) {
    try {
        const contacts = await prisma.inquiry.findMany({
            
        })
        return NextResponse.json(contacts)
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}