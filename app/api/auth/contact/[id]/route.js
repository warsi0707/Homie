import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    const { id } = await params;
    try {
        const contact = await prisma.contact.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json(contact)
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function  DELETE(req,{params}) {
    const { id } = await params;
    try {
        const contact = await prisma.inquiry.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Contact Deleted"
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }
}