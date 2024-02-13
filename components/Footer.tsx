import { HomeFooterLinks } from '@/libs/constant'
import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-4 bg-black p-12">
        <h2>Questions? Call 000-800-919-1694</h2>
        <ul className="grid h-full grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4">
          {HomeFooterLinks.map(({ id, footLink }) => (
            <li
              key={id}
              className="cursor-pointer underline underline-offset-2"
            >
              {footLink}
            </li>
          ))}
        </ul>
        <h2 className="mt-4 text-center font-semibold">
          © 2024 Created by Nikhil Mhatre. All rights reserved.
        </h2>
      </footer>
    )
}

export default Footer