import React from 'react'
import Link from 'next/link'
import {
Github
} from "lucide-react";
const Navbar = () => {
  return (
      <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
          <h1 className="font-bold"><Link href="/">SAGE</Link></h1>
          <p className="text-sm">
            {/* developed by <Link href="https://twitter.com/xanmoy" className="text-blue-600">
              Xanmoy

          </Link> */}
          <Link href="https://github.com/xanmoy/sage.git" className="text-blue-600">
             <Github className="rounded-full text-zinc-200 p-1 h-8 w-8" />

          </Link> 
          
              </p>


      </nav>
  )
}

export default Navbar
