import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'

function Layout({children}) {

    const location = useLocation()

    console.log(location)

  return (
    <Box bgcolor={'bglight.main'} minHeight={'100vh'}>
        {location.pathname.includes('/app/') ? <Navbar children={children} /> : <div>{children}</div>}
    </Box>
  )
}

export default Layout