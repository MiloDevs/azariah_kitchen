import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between top-0 fixed right-0 left-0 container mx-auto py-6'>
        <Image
        src={'/azariahlogo.jpg'}
        alt='AzariahLogo'
        height={50}
        width={50}
        />

        <ul className='flex items-center space-x-6'>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/Recipes'}>Recipes</Link>
            </li>
            <li>
                <Link href={'/About'}>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar