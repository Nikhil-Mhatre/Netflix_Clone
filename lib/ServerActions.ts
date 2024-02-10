'use server'

import prismadb from "./prisma";

export async function checkUserPresence(email: string){
    try {
        const user = await prismadb.user.findUnique({
            where: {email}
        })
        if(!user) throw new Error("user doesn't exist!") 
        return true
    } catch (error) {
        return false
    }
}

