import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function  DELETE(req,{params}) {
    const {id} = await params;

    const deleteUser = await prisma.user.delete({
        where: {
            id: id
        }
    })
    return NextResponse.json({
        msg: "Deleted",
        user: deleteUser
    })
    
}