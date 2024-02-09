import { NextResponse } from "next/server"
import prismadb from "@/lib/prisma"
import bcrypt from 'bcrypt'


export async function POST(req: Request) {
    try {

        const { email, password } = await req.json()

        if (!email || !password) throw new Error('Required Email and Password')

        const existingUser = await prismadb.user.findUnique({
            where: { email }
        })

        if (!existingUser) throw new Error("Invalid Email")

        const isPasswordCorrect = await bcrypt.compare(password, String(existingUser?.hashedPassword))

        if (!isPasswordCorrect) throw new Error('Incorrect Password!')

        return NextResponse.json(existingUser)

    } catch (error) {
        return NextResponse.json({ error: `Unable to Signin ${error}`, status: '404' })

    }
}
