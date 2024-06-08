import React from 'react'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div>
      <header className='w-full'>
        <nav className='nav'>
          <Link  href="/" className='flex items-center gap-1'>
          <p>Best<span  className='text-primary'>Scraped</span></p>
          </Link >
          
        </nav>
      </header>
    </div>
  )
}

export default Navbar
