import { Typography } from '@mui/material'
import React from 'react'

function Title({text}) {
  return (
    <Typography color={'secondary'} fontWeight={'semibo9ld'} fontSize={{xs: 18, lg:20}}>
      {text}
    </Typography>
  )
}

export default Title