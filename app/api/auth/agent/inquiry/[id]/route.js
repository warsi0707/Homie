import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}) {
    const {id} = await params;
    try{
        const inquiry = await prisma.inquiry.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            message: "Inquiry deleted"
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}