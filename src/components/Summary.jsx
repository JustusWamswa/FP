import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
function Summary() {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} mb={5}>
            <Paper sx={{ p: 2, borderRadius: 3, width: '24%' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant='h6' color={'gray'}>Total Users</Typography>
                        <Typography mt={2} mb={3} variant='h4' fontWeight={'bold'}>40,689</Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: 'bgdark.main', width: 60, height: 60, borderRadius: 5 }}>
                        <PeopleAltIcon color='primary' sx={{ width: '50%', height: '50%' }} />
                    </Avatar>
                </Box>
                <Typography display={'flex'} alignItems={'center'} variant='h6'>
                    <TrendingUpOutlinedIcon color='primary' />
                    <Typography variant='h6' color='primary'>&nbsp;8.5%&nbsp;</Typography>Up from last month
                </Typography>
            </Paper>
            <Paper sx={{ p: 2, borderRadius: 3, width: '24%' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant='h6' color={'gray'}>Total Resources</Typography>
                        <Typography mt={2} mb={3} variant='h4' fontWeight={'bold'}>10,293</Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: '#FFE4E2', width: 60, height: 60, borderRadius: 5 }}>
                        <ViewInArIcon sx={{ color: 'secondary.main', width: '50%', height: '50%' }} />
                    </Avatar>
                </Box>
                <Typography display={'flex'} alignItems={'center'} variant='h6'>
                    <TrendingUpOutlinedIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant='h6' color='secondary.main'>&nbsp;1.3%&nbsp;</Typography>Up from past week
                </Typography>
            </Paper>
            <Paper sx={{ p: 2, borderRadius: 3, width: '24%' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant='h6' color={'gray'}>Total Appointments</Typography>
                        <Typography mt={2} mb={3} variant='h4' fontWeight={'bold'}>400</Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: 'bgdark.main', width: 60, height: 60, borderRadius: 5 }}>
                        <ShowChartIcon color='primary' sx={{ width: '50%', height: '50%' }} />
                    </Avatar>
                </Box>
                <Typography display={'flex'} alignItems={'center'} variant='h6'>
                    <TrendingDownIcon color='primary' />
                    <Typography variant='h6' color='primary'>&nbsp;4.3%&nbsp;</Typography>Down from yesterday
                </Typography>
            </Paper>
            <Paper sx={{ p: 2, borderRadius: 3, width: '24%' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant='h6' color={'gray'}>Total Records</Typography>
                        <Typography mt={2} mb={3} variant='h4' fontWeight={'bold'}>2,040</Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: '#FFE4E2', width: 60, height: 60, borderRadius: 5 }}>
                        <QueryBuilderIcon sx={{ color: 'secondary.main', width: '50%', height: '50%' }} />
                    </Avatar>
                </Box>
                <Typography display={'flex'} alignItems={'center'} variant='h6'>
                    <TrendingUpOutlinedIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant='h6' color='secondary.main'>&nbsp;1.5%&nbsp;</Typography>Up from yesterday
                </Typography>
            </Paper>
        </Stack>
    )
}

export default Summary