"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SigninFormSchema, SignupFormSchema, z } from "@/lib/zodSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import React, { useState } from "react";
import { SIGNIN_FORMITEMS, SIGNUP_FORMITEMS } from "@/lib/contants";

export const FormContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "";
  const homeAuthParam = searchParams.get("value");
  const [toogleAuth, setToggleAuth] = useState(homeAuthParam ||"signin");
  const router = useRouter();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(
      toogleAuth === "signin" ? SigninFormSchema : SignupFormSchema,
    ),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  type loginType = {
    email: string;
    password: string;
  };
  const login = async ({ email, password }: loginType) => {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (response?.error) throw new Error(response.error);
      toast.success("Successfully Logged In");
      router.push("/profile");
    } catch (err) {
      toast.error(String(err));
      console.log(err);
    }
  };
  type signupType = {
    username: string;
    email: string;
    password: string;
  };
  const register = async ({ email, password, username }: signupType) => {
    try {
      const response = await axios.post("/api/signup", {
        email,
        username,
        password,
      });
      const isErrorOccurs = response.data.error;
      if (isErrorOccurs) throw new Error(String(isErrorOccurs).substring(6));
      toast.success("Successfully Register");
      login({ email, password });
    } catch (err) {
      toast.error(String(err));
      console.log(err);
    }
  };

  async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    if (toogleAuth === "signup") {
      register({ ...values });
    } else {
      const { email, password } = values;
      login({ email, password });
    }
  }

  return (
    <div
      className="container relative mt-12 flex flex-col 
            gap-6 md:mt-6 md:items-center md:gap-12 md:bg-black
            md:bg-opacity-60 lg:mb-4 lg:mt-2 lg:w-2/6 lg:rounded-lg lg:py-5"
    >
      <h1 className="text-4xl font-semibold">
        {toogleAuth === "signin" ? "Sign In" : "Sign Up"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-6"
        >
          {(toogleAuth === "signin" ? SIGNIN_FORMITEMS : SIGNUP_FORMITEMS).map(
            ({ FieldName, FieldLabel, FieldType }) => (
              <FormField
                key={FieldName}
                control={form.control}
                name={FieldName}
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={
                            FieldType !== "password"
                              ? FieldType
                              : showPassword
                                ? "text"
                                : "password"
                          }
                          className="peer relative px-4 py-8 text-xl"
                          placeholder=" "
                          {...field}
                        />
                      </FormControl>
                      <FormLabel
                        className="absolute left-4 top-4 origin-[0] -translate-y-4
                                        scale-75 text-xl peer-placeholder-shown:-translate-y-0 
                                        peer-placeholder-shown:scale-100 peer-focus:-translate-y-4
                                        peer-focus:scale-75"
                      >
                        {FieldLabel}
                      </FormLabel>
                    </div>
                    <div
                      className="absolute right-12 top-40 md:top-[11.5rem] lg:top-52"
                      onClick={() => {
                        setShowPassword((prevVal) => !prevVal);
                      }}
                    >
                      {FieldType === "password" &&
                        (showPassword ? (
                          <IoMdEye size={30} />
                        ) : (
                          <IoMdEyeOff size={30} />
                        ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ),
          )}
          <Button
            className="rounded-lg py-8 text-xl hover:bg-red-800"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
      {/* oAuth Actions Btns */}
      <div className="flex gap-4 md:justify-center">
        <FcGoogle
          onClick={() => signIn("google", { callbackUrl })}
          className="cursor-pointer"
          size={40}
        />
        <AiOutlineGithub
          onClick={() => signIn("github", { callbackUrl })}
          className="cursor-pointer"
          size={40}
        />
      </div>
      <p className="text-xl font-light lg:text-lg">
        {toogleAuth === "signin"
          ? "Don't have Account? "
          : "Already have Account? "}
        <span
          onClick={() => {
            setToggleAuth((prevVal) =>
              prevVal === "signin" ? "signup" : "signin",
            );
          }}
          className="cursor-pointer font-bold hover:underline 
                    hover:underline-offset-2"
        >
          {toogleAuth === "signin" ? "Sign Up" : "Sign In"}
        </span>
      </p>
    </div>
  );
};
