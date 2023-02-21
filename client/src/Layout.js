import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Header'

function Layout() {
  return (
    <main>
      <Headers/>
      <Outlet/>
    </main>
  )
}

export default Layout
