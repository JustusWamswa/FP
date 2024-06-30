import React from 'react'
import Appointments from '../components/Appointments'
import Records from '../components/Records'
import RecentConsultations from '../components/RecentConsultations'
import { Box, Grid, Stack } from '@mui/material'
import Calendar from '../components/Calendar'
import RecentActivities from '../components/RecentActivities'

function Dashboard() {
  return (
    <Stack direction={'row'}>
      <Box width={'70%'} height={'100%'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Appointments />
          </Grid>
          <Grid item xs={6}>
            <Records />
          </Grid>
          <Grid item xs={6}>
            <RecentConsultations />
          </Grid>
        </Grid>
      </Box>
      <Box width={'30%'} ml={2}>
        <Calendar />
        <RecentActivities />
      </Box>
    </Stack>
  )
}

export default Dashboard