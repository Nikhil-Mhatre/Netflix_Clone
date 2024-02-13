import { emailSchema } from '@/libs/zodSchema';
import { FieldValues } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { IoIosArrowForward } from 'react-icons/io'

function Hero() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors:emailErr } } = useForm<FieldValues>({
        resolver: zodResolver(emailSchema),
      });
      
      const onSubmit = async(data: FieldValues  )=>{
        const {email} = data
        const respo = await  axios.post(`/api/checkuser`, {
          email
        });
        
        if(respo.data){
          router.push(`/auth?auth_type=login&input_email=${email}`)
        }else{
          router.push(`/auth?auth_type=register&input_email=${email}`)    
        }
    }

  return (
    <section className="w-auto bg-black text-xs md:h-4/6 lg:h-full">
        <div
          className="h-full bg-[url(../public/images/hero.jpg)]
        bg-cover bg-no-repeat"
        >
          <div className="h-full bg-black bg-opacity-60">
            {/* Navbar */}
            <nav className="flex h-24 w-full items-center justify-around md:justify-around lg:justify-between lg:px-16">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-6 md:h-9 lg:h-12 "
              />
              <div className="md:text-lg">
                <select
                  name="LanguageSelect"
                  className="mr-2 rounded-lg border-2 border-gray-300 bg-gray-900 
                py-2 focus:outline-none lg:px-6"
                >
                  <option defaultValue={"en-IN"}  lang="en" label="English">
                    English
                  </option>
                  <option lang="hi" label="हिन्दी" value="hi-IN">
                    हिन्दी
                  </option>
                </select>
                <Link
                  href={"/auth"}
                  className="rounded-lg bg-red-700 px-6 py-2 font-bold text-white"
                >
                  Sign In
                </Link>
              </div>
            </nav>
            {/* Hero */}
            <div
              className=" flex h-full flex-col items-start justify-center gap-4 p-12 
          md:items-center"
            >
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-lg tracking-tight md:text-xl lg:text-2xl">
                Watch anywhere. Cancel anytime.
              </p>
              <p className="text-lg tracking-tight md:text-xl lg:text-2xl">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              {/* Hero btn */}         
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex w-full flex-col items-center gap-4 text-lg
                  md:w-6/12 md:flex-row md:justify-center md:text-xl lg:text-2xl"
                >                     
                    <div className="relative w-full">
                      <input
                        {...register('email')}
                        type="email"
                        id="hero-email"
                        placeholder=" "
                        className={`peer w-full rounded-lg bg-gray-700 p-4 
                        focus:outline-none ${emailErr.email && 'border-2 border-red-500'}`
                        }
                      />
                      <label
                        htmlFor="hero-email"
                        className={`absolute text-gray-500 left-4 top-4 origin-[0] -translate-y-4 
                          scale-75 transition ease-in-out peer-placeholder-shown:translate-y-0 
                          peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 
                          peer-focus:scale-75 ${emailErr.email && 'text-red-500'}`
                      
                    }
                      >
                        Email Address
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-lg
                    bg-red-700 px-2 py-3 font-bold tracking-wider text-white md:py-4 md:text-lg"
                    >
                      <span>Get</span>
                      <span>Started</span>
                      <IoIosArrowForward />
                    </button>
                </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero