import React from 'react'
import Image from 'next/image'
import EH_P from '@/assets/gov-999.png'
import Link from 'next/link'

const EmergencyHotline = () => {
  return (
    <div>
        <h1 className='text-center text-2xl font-bold hover:underline'>Emergency Hotline</h1>
        <Link href="tel:999">
        <Image className="mx-auto w-auto h-auto" src={EH_P} alt="Emergency Hotline" width={200} height={54} />
        </Link>
    </div>
  )
}

export default EmergencyHotline