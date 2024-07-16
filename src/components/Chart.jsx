import { Paper, Typography } from '@mui/material'
import React from 'react'

function Chart() {
  return (
    <Paper sx={{height: '40vh', p: 3, mb: 5}}>
        <Typography variant='h6' fontWeight={'bold'}>Health Status Distribution</Typography>
    </Paper>
  )
}

export default Chart