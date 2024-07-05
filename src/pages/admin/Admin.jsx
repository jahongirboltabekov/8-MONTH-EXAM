import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './create_product/CreateProduct'
import MangeProduct from './manage_product/MangeProduct'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import './Admin.scss'



const Admin = () => {
  return (
  <div className='admin_wrap'>   
    <div className="admin_nav">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><MdOutlineDashboardCustomize />Create product</li>
        <li><LuPencilLine />Manage product</li>
        <li><MdOutlineDashboardCustomize />Create category</li>
        <li><LuPencilLine />Manage category</li>
      </ul>
    </div>
    <Routes>
      <Route path='createProduct' element={<CreateProduct/>}/>
      <Route path='mangeproduct' element={<MangeProduct/>}/>
    </Routes>
  </div>
  )
}

export default Admin