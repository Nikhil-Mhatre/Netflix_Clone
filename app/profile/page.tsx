'use client'

import React from "react";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function profile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });

  if (!session)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <h1>UnAuthorized</h1>
      </div>
    );
  return <div className="h-screen flex flex-col justify-center items-center">
    <h1>Profile Page</h1>
    <button 
    onClick={()=>{signOut()}}
    className="py-2 px-4 border-2 rounded-lg hover:bg-green-600">Sign Out</button>
  </div>;
}

export default profile;
