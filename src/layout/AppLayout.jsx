import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet />
    </div>
  )
}

export default AppLayout
