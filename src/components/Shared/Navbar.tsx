import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-200 py-3 flex justify-between'>
      <h1 className=' text-center'>This is Navbar</h1>
      <ul className='flex items-center gap-4'>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div></div>
    </div>
  )
}

export default Navbar
