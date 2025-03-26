import React from 'react'
import DashboardPage from '../pages/DashboardPage'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
      <DashboardPage />
      </div>
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout