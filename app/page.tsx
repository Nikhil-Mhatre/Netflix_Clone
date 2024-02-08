'use client'

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";



export default function Home() {

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth?callbackUrl=/')
    },
  })


  return (
    <div className="h-full gap-4 flex flex-col justify-center items-center">
      <h1>Home Page</h1>
      <p>Logged in as {session?.user?.email}</p>
      <button
        onClick={() => { signOut() }}
        className="border-2 py-2 px-4 hover:bg-green-600 rounded-lg">
        Signout
      </button>
    </div>
  );
}
