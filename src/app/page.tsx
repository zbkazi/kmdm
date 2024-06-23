// src/app/page.tsx
import Home from '@/components/home/Home'
import ThemeSwitcher from '@/components/themes/ThemeSwitcher'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
     <Home />

     <h1 className="text-2xl mb-4">Welcome to My Next.js App</h1>
      <ThemeSwitcher />
    </div>
  )
}

export default HomePage