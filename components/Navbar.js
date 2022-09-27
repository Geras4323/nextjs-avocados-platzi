import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-red-200">
      <nav>
        <menu className="space-x-2   hover:text-cyan-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </menu>
      </nav>
    </div>
  )
}

export default Navbar;