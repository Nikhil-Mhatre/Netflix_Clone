'use client'

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SigninFormSchema, SignupFormSchema, z } from '@/lib/zodSchema'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineGithub } from "react-icons/ai";


interface FormItem {
    FieldName: FieldName; // Enforce "email", "username", or "password"
    FieldLabel: FieldLabel; // Enforce string type for label
    // Add other properties as needed (e.g., validation rules, initial values)
}

const SIGNIN_FORMITEMS: FormItem[] = [
    { FieldName: "email", FieldLabel: "Email" },
    { FieldName: "password", FieldLabel: "Password" },
];

const SIGNUP_FORMITEMS: FormItem[] = [
    { FieldName: "username", FieldLabel: "Username" },
    { FieldName: "email", FieldLabel: "Email" },
    { FieldName: "password", FieldLabel: "Password" },
];

function SignUpPage() {



    return (
        // Setting Netflix Background hero Img
        <section className="relative h-full w-auto bg-[url('/images/hero.jpg')]
            bg-no-repeat bg-center bg-fixed bg-cover">
            {/* Decrease bg opacity for large screen and opaque for small ones */}
            <div className='bg-black w-full h-full md:bg-opacity-50 scroll-smooth overflow-y-scroll'>
                {/* Netflix Logo */}
                <nav className='px-12 py-6 md:py-9'>
                    <img src='/images/logo.png' alt='Logo' className='h-6 md:h-9 lg:h-12 ' />
                </nav>
                <FormContainer />
            </div>
        </section>
    )
}

const FormContainer = () => {
    const [toogleAuth, setToggleAuth] = useState('signin')


    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(toogleAuth === 'signin' ? SigninFormSchema : SignupFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })


    function onSubmit(values: z.infer<typeof SignupFormSchema>): void {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div
            className='container relative flex flex-col gap-6 
            md:gap-12 md:items-center lg:w-2/6 mt-12 md:mt-6
            md:bg-black md:bg-opacity-60 lg:py-5 lg:mb-4 lg:rounded-lg lg:mt-2'>
            <h1 className='text-4xl font-semibold'>
                {toogleAuth === "signin" ? "Sign In" : "Sign Up"}
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex flex-col gap-6">
                    {(toogleAuth === "signin" ? SIGNIN_FORMITEMS : SIGNUP_FORMITEMS)
                        .map(({ FieldName, FieldLabel }) => (
                            <FormField
                                key={FieldName}
                                control={form.control}
                                name={FieldName}
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='relative'>
                                            <FormControl>
                                                <Input className='py-8 text-xl peer px-4 ' placeholder=" " {...field} />
                                            </FormControl>
                                            <FormLabel
                                                className='text-xl absolute top-4 left-4 origin-[0]
                                             -translate-y-4 scale-75 peer-focus:scale-75 
                                             peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-0
                                             peer-placeholder-shown:scale-100'>
                                                {FieldLabel}
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))
                    }
                    <Button
                        className='text-xl py-8 rounded-lg hover:bg-red-800'
                        type="submit">Submit</Button>
                </form>
            </Form>
            {/* oAuth Actions Btns */}
            <div className='flex gap-4 md:justify-center'>
                <FcGoogle className='cursor-pointer' size={40} />
                <AiOutlineGithub className='cursor-pointer' size={40} />
            </div>
            <p className='text-xl lg:text-lg font-light'>
                {toogleAuth === 'signin' ? "Don't have Account? " : 'Already have Account? '}
                <span
                    onClick={() => {
                        setToggleAuth(prevVal => prevVal === 'signin' ? 'signup' : 'signin')
                    }}
                    className='cursor-pointer font-bold hover:underline 
                    hover:underline-offset-2'>
                    {toogleAuth === 'signin' ? 'Sign Up' : 'Sign In'}
                </span>
            </p>
        </div>
    )
}

export default SignUpPage