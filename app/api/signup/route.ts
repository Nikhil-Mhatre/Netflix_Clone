import { NextResponse } from "next/server"
import prismadb from "@/lib/prisma"
import bcrypt from 'bcrypt'

type signDetails = {
    email: string,
    username: string,
    password: string
}

export async function POST(req: Request) {
    try {
        const { email, username, password }: signDetails = await req.json()

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) throw new Error('Email Already Taken!')

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prismadb.user.create({
            data: {
                email,
                username,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ error: String(error), status: "404" })
    }
}
