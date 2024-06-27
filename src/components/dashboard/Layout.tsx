'use client'
import React from 'react'
import Sidebar from './Sidebar/Sidebar'

const Layout = () => {
  return (
    <div>
      <Sidebar className="w-64" toggle={Layout} />
      
    </div>
  )
}

export default Layout