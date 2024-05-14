import React from 'react'
import Image from 'next/image'
import Mujib_P from '@/assets/Mujib_100_Logo.svg'
import Link from 'next/link'
const Mujib = () => {
  return (
    <div>
       <div>
        <h1 className='text-center text-2xl font-bold hover:underline'>মুজিব বর্ষ </h1>
        <Link href="https://sheikhmujib.com/bn/mujib-100/">
        <Image className="mx-auto w-auto h-auto" src={Mujib_P} alt="Emergency Hotline" width={200} height={54} />
        </Link>
    </div>
    </div>
  )
}

export default Mujib


