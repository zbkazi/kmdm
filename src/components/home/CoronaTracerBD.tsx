import React from 'react'
import Image from 'next/image'
import EH_P from '@/assets/CoronaImages.png'
import Link from 'next/link'

const CoronaTracerBD = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-xl font-bold hover:underline'>Corona Tracer BD </h1>
        <Link href="tel:999">
        <Image className="mx-auto w-auto h-auto" src={EH_P} alt="Emergency Hotline" width={200} height={54} />
        </Link>
    </div>
    </div>
  )
}

export default CoronaTracerBD