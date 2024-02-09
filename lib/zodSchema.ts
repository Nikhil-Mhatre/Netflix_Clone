"use client"


import { z } from "zod"

const SignupFormSchema = z.object({
    username: z
        .string()
        .min(1, { message: "Required Username!" })
        .max(30),
    email: z
        .string()
        .min(1, { message: "Required Email!" })
        .email("Invalid Email!"),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .refine((val) => val.search(/[a-z]/) !== -1, 'Password must contain at least one lowercase character')
        .refine((val) => val.search(/[A-Z]/) !== -1, 'Password must contain at least one uppercase character')
        .refine((val) => val.search(/[!@#$%^&*]/) !== -1, 'Password must contain at least one special character')
        .refine((val) => val.search(/\d/) !== -1, 'Password must contain at least one number')
})

const SigninFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Required Email!" })
        .email("Invalid Email!"),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .refine((val) => val.search(/[a-z]/) !== -1, 'Password must contain at least one lowercase character')
        .refine((val) => val.search(/[A-Z]/) !== -1, 'Password must contain at least one uppercase character')
        .refine((val) => val.search(/[!@#$%^&*]/) !== -1, 'Password must contain at least one special character')
        .refine((val) => val.search(/\d/) !== -1, 'Password must contain at least one number')
})




export { SigninFormSchema, SignupFormSchema, z }