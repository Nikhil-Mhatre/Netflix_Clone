'use client'

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
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import React, { useState } from 'react'
import { SIGNIN_FORMITEMS, SIGNUP_FORMITEMS } from "@/lib/contants"



export const FormContainer = () => {
    const [toogleAuth, setToggleAuth] = useState('signin')
    const [showPassword, setShowPassword] = useState(false)
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || ''
    const router = useRouter()

    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(toogleAuth === 'signin' ? SigninFormSchema : SignupFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    type loginType = {
        email: string,
        password: string
    }
    const login = async ({ email, password }: loginType) => {
        try {
            const response = await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });
            if (response?.error) throw new Error(response.error)
            toast.success('Successfully Logged In')
            router.push('/');
        } catch (err) {
            toast.error(String(err))
            console.log(err);
        }
    }
    type signupType = {
        username: string
        email: string,
        password: string
    }
    const register = async ({ email, password, username }: signupType) => {
        try {
            const response = await axios.post('/api/signup', {
                email,
                username,
                password
            })
            const isErrorOccurs = response.data.error
            if (isErrorOccurs) throw new Error(String(isErrorOccurs).substring(6))
            toast.success('Successfully Register')
            login({ email, password })
        } catch (err) {
            toast.error(String(err))
            console.log(err);

        }
    }


    async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
        if (toogleAuth === 'signup') {
            register({ ...values })
        } else {
            const { email, password } = values
            login({ email, password })
        }
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
                        .map(({ FieldName, FieldLabel, FieldType }) => (
                            <FormField
                                key={FieldName}
                                control={form.control}
                                name={FieldName}
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='relative'>
                                            <FormControl>
                                                <Input type={FieldType !== 'password' ? FieldType : (showPassword ? 'text' : 'password')}
                                                    className='py-8 text-xl peer px-4 relative'
                                                    placeholder=" " {...field} />
                                            </FormControl>
                                            <FormLabel
                                                className='text-xl absolute top-4 left-4 origin-[0]
                                        -translate-y-4 scale-75 peer-focus:scale-75 
                                        peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-0
                                        peer-placeholder-shown:scale-100'>
                                                {FieldLabel}
                                            </FormLabel>
                                        </div>
                                        <div
                                            className="absolute right-12 top-40 md:top-[11.5rem] lg:top-52"
                                            onClick={() => { setShowPassword((prevVal) => !prevVal) }}>
                                            {FieldType === 'password'
                                                && (showPassword
                                                    ? <IoMdEye size={30}/>
                                                    : <IoMdEyeOff size={30} />
                                                )
                                            }
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
                <FcGoogle
                    onClick={() => signIn('google', { callbackUrl })}
                    className='cursor-pointer' size={40} />
                <AiOutlineGithub
                    onClick={() => signIn('github', { callbackUrl })}
                    className='cursor-pointer' size={40} />
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
