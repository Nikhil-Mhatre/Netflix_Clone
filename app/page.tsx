"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQITEMS, HomeFooterLinks } from "@/lib/contants";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth?callbackUrl=/");
    },
  });

  if (!session)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h1>UnAuthorized</h1>
      </div>
    );

  return (
    <main className="scroll-smooth h-full">
      {/* Hero Section */}
      <section className="w-auto bg-black text-xs md:h-4/6 lg:h-full">
        <div
          className="h-full bg-[url(../public/images/hero.jpg)]
        bg-cover bg-no-repeat"
        >
          <div className="h-full bg-black opacity-70">
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
                  <option selected value="en-IN" lang="en" label="English">
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
              <div
                className="flex w-full flex-col items-center gap-4 text-lg
          md:w-6/12 md:flex-row md:justify-center md:text-xl lg:text-2xl"
              >
                <div className="relative w-full">
                  <input
                    type="text"
                    id="hero-email"
                    placeholder=" "
                    className="peer w-full rounded-lg bg-gray-700
                p-4 focus:outline-none"
                  />
                  <label
                    htmlFor="hero-email"
                    className="absolute left-4 top-4 origin-[0] -translate-y-3 
                scale-75 transition ease-in-out peer-placeholder-shown:translate-y-0 
                peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 
                peer-focus:scale-75"
                  >
                    Email Address
                  </label>
                </div>
                <Link
                  href={"/auth"}
                  className="flex items-center gap-2 rounded-lg
                bg-red-700 px-2 py-3 font-bold tracking-wider text-white md:py-4 md:text-lg"
                >
                  <span>Get</span>
                  <span>Started</span>
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Enjoy on TV section */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">Enjoy on your TV</h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div>
          <img src="/images/home/home-tv-img.png" alt="" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Download show section */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row-reverse lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">
            Download your shows to watch offline
          </h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div>
          <img src="/images/home/home-download-img.jpg" alt="" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Watch Everywhere sections */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">Watch everywhere</h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <img src="/images/home/home-watch-img.png" alt="" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* kids section */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row-reverse lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">
            Create profiles for kids
          </h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div>
          <img src="/images/home/home-kids-img.png" alt="" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* FAQ section */}
      <section
        className="flex flex-col items-center justify-center gap-12 bg-black
       p-6  text-white"
      >
        <h1 className="text-4xl font-bold lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <FaqAccordian />
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      <footer className="flex flex-col justify-center gap-4 bg-black p-12">
        <h2>Questions? Call 000-800-919-1694</h2>
        <ul className="grid h-full gap-x-4 gap-y-4 grid-cols-2 lg:grid-cols-4">
          {HomeFooterLinks.map(({ id, footLink }) => (
            <li
              key={id}
              className="cursor-pointer underline underline-offset-2"
            >
              {footLink}
            </li>
          ))}
        </ul>
        <h2 className="mt-4 font-semibold text-center">© 2024 Created by Nikhil Mhatre. All rights reserved.</h2>
      </footer>
    </main>
  );
}

const FaqAccordian = () => {
  return (
    <div className="h-full w-full lg:w-6/12">
      {FAQITEMS.map(({ quest, answer, id }) => (
        <Accordion key={id} type="single" collapsible className="px-12">
          <AccordionItem
            value={`item-${id}`}
            className="border-b-8 border-b-black
        bg-gray-800 px-12 transition ease-in-out hover:bg-gray-600"
          >
            <AccordionTrigger className="hover:no-underline">
              {quest}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
