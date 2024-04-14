import React from 'react'
import { Outlet } from 'react-router-dom'
import { BillHeader } from '../components/bill/BillComponents'


function BillLayout() {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <BillHeader/>
      <Outlet/>
    </div>
  )
}

export default BillLayout
