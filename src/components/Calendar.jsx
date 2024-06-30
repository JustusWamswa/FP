import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { Avatar, Box, Typography } from '@mui/material'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'

function Calendar() {
    return (
        <>
            <Box bgcolor={'bgdark.main'} borderRadius={3} width={'50%'} mx={'auto'} mt={4} p={3} position={'relative'}>
                <Avatar alt="User" src={user} sx={{ height: 70, width: 70, position: 'absolute', top: -30, left: '50%', translate: '-50%' }} />
                <Typography fontWeight={'bold'} textAlign={'center'} mt={3}>Lisa Nkinuni</Typography>
                <Typography textAlign={'center'}>lisankinuni@gmail.com</Typography>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
        </>
    )
}

export default Calendar