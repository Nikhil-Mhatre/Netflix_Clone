"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Main from "@/components/Main";
import Hero from "@/components/Hero";



export default function Home() {

  const {data:session } = useSession()
  const router = useRouter()
  
  // if Session Exist go to profiles page
  if(session) router.push('/profiles')

  return (
    <main className="h-full scroll-smooth">
      {/* Hero Section */}
      <Hero/>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Main section */}
      <Main/>
      {/* FAQ section */}
     <Faq/>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Footer */}
      <Footer/>
    </main>
  );
}

