import { prisma } from "@/lib/PrismaProvider"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { message, userId, propertyId} = await req.json()
    try {
        const contact = await prisma.inquiry.create({
            data: {
                message,
                userId,
                propertyId
            }
        })
        return NextResponse.json({
            message: "Contact Created"
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function GET(req) {
    try {
        const contacts = await prisma.inquiry.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                property: {
                    select: {
                        id: true,
                        title: true,
                        location: true
                    }
                }
            }
        })
        return NextResponse.json(contacts)
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}