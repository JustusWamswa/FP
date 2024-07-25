import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import AdminNavbar from './AdminNavbar'
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react"


function Layout({ children }) {

  const location = useLocation()

  return (
    <Box bgcolor={'bglight.main'} minHeight={'100vh'}>
      {location.pathname.includes('/app/') ? <><SignedOut><RedirectToSignIn /></SignedOut><SignedIn><Navbar children={children} /></SignedIn></>
        : location.pathname.includes('/admin/') ? <><SignedOut><RedirectToSignIn /></SignedOut><SignedIn><AdminNavbar children={children} /></SignedIn></>
          : <div>
            {children}
          </div>}
    </Box>
  )
}

export default Layout