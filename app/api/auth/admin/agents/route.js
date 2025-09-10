import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const agent = await prisma.user.findMany({
            where: {
                role: "AGENT"
            },
            select: {
                email: true,
                name: true,
                phone: true
            }
        })
        return NextResponse.json({
            agents: agent
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 404 })
    }
}