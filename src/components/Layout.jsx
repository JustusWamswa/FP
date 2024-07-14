import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import AdminNavbar from './AdminNavbar'

function Layout({ children }) {

  const location = useLocation()

  return (
    <Box bgcolor={'bglight.main'} minHeight={'100vh'}>
      {location.pathname.includes('/app/') ? <Navbar children={children} />
        : location.pathname.includes('/admin/') ? <AdminNavbar children={children} />
          : <div>{children}</div>}
    </Box>
  )
}

export default Layout