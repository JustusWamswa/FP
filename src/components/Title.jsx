import { Typography } from '@mui/material'
import React from 'react'

function Title({text}) {
  return (
    <Typography color={'secondary'} fontWeight={'bold'} fontSize={{xs: 18, lg:25}}>
      {text}
    </Typography>
  )
}

export default Title