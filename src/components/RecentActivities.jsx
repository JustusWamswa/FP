import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/streamline_waiting-appointments-calendar.png'

function RecentActivities() {
    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography fontSize={'1.2rem'} fontWeight={'medium'} color={'primary'}>Recent Activities</Typography>
            <Box display={'flex'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'primary'} fontSize={'1.2rem'}>Notification title</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                    <Typography color={'primary'}>9 mins ago</Typography>
                </Stack>
            </Box>
            <Box display={'flex'} borderRadius={3} justifyContent={'space-between'} p={1} my={2} bgcolor={'secondary.main'}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'white'} fontSize={'1.2rem'}>Notification title</Typography>
                        <Typography color={'white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                    <Typography color={'white'}>9 mins ago</Typography>
                </Stack>
            </Box>
            <Box display={'flex'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'primary'} fontSize={'1.2rem'}>Notification title</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                    <Typography color={'primary'}>9 mins ago</Typography>
                </Stack>
            </Box>
        </Paper>
    )
}

export default RecentActivities