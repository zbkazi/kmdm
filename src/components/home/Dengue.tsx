import React from 'react'
import Image from 'next/image'
import Dengue_P from '@/assets/Dengue.png'
import Link from 'next/link'
const Dengue = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-2xl font-bold hover:underline'>Dengue </h1>
        <Link href="tel:999">
        <Image className="mx-auto w-auto h-auto" src={Dengue_P} alt="Emergency Hotline" width={200} height={54} />
        </Link>
    </div>
    </div>
  )
}

export default Dengue