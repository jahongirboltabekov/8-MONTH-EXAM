import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";
import './Admin.scss'



const Admin = () => {
  return (
  <div className='admin_wrap'>   
    <div className="admin_nav">
      <h1>Admin Dashboard</h1>
      <ul>
        <NavLink to={'createproduct'}><li><MdOutlineDashboardCustomize className='icon'/>Create product</li></NavLink> 
        <NavLink to={'mangeproduct'}><li><LuPencilLine className='icon'/>Manage product</li></NavLink> 
        <NavLink><li><MdOutlineDashboardCustomize className='icon'/>Create category</li></NavLink> 
        <NavLink><li><LuPencilLine className='icon'/>Manage category</li></NavLink> 
      </ul>
    </div>
    <Outlet/>
  </div>
  )
}

export default Admin