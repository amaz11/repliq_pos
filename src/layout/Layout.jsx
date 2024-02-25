import React from 'react'
import Sidebar from '../components/navigationBar/Cartbar/Sidebar'
import Topbar from '../components/navigationBar/Cartbar/Topbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout