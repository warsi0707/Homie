import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'


export async function POST(req) {
    const {name, email, message} = req.json()
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const mailOption = {
            from: email,
            to: process.env.EMAIL_ID,
            subject: `Message from ${name}`,
            text: message
        }
        await transporter.sendMail(mailOption)
        return NextResponse.json({
            message: "Email setn successfully"
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 404 })
    }

}