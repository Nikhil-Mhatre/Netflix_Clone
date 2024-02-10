'use server'

import { checkUserPresence } from "@/lib/ServerActions"

export async function checkEmailExistenceAction(email:string){
    return await checkUserPresence(email)
}