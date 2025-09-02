import { prisma } from "@/lib/PrismaProvider";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


export async function POST(req) {
    const { email, name, password, phone, roles, } = await req.json()
    try {
        if(!email || !name || !password || !phone){
            return NextResponse.json({
                error: "All input required"
            })
        }
        const ExistingUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if(ExistingUser){
            return NextResponse.json({
                error: `${email} Already Exist`
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        if(process.env.ADMIN_SECRET === password.toUpperCase()){
            await prisma.user.create({
                data : {
                    email,
                    name,
                    password: hashPassword,
                    phone,
                    role: 'ADMIN'
                }
            })
        }else{
        const role = roles.toUpperCase() || 'USER'
        const NewUser = await prisma.user.create({
            data : {
                email,
                name,
                password: hashPassword,
                phone,
                role: role
            }
        })
        return NextResponse.json({
            message: 'Signup Success'
        })
    }
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }

}
export async function GET(req) {
    const users = await prisma.user.findMany({})
    return NextResponse.json({
        users: users
    })
}
export async function DELTE(req) {
    const delte = await prisma.user.deleteMany()
    return NextResponse.json({
        msge: "Deltetd",
        users: delte
    })
    
}