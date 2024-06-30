import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Ultasound from '../assets/top-view-positive-pregnancy-test-ultrasound_23-2150357642.jpg'

function Records() {
    return (
        <Paper sx={{p: 3, borderRadius: 3}}>
            <Typography fontSize={'1.2rem'} fontWeight={'medium'} color={'primary'}>Records</Typography>
            <Box display={'flex'} alignItems={'center'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Typography color={'primary'}>First Ultrasound</Typography>
                <Box
                    component="img"
                    sx={{ height: 80 }}
                    alt="Ultasound"
                    src={Ultasound}
                />
            </Box>
            <Box display={'flex'} alignItems={'center'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Typography color={'primary'}>First Ultrasound</Typography>
                <Box
                    component="img"
                    sx={{ height: 80 }}
                    alt="Ultasound"
                    src={Ultasound}
                />
            </Box>
            <Box display={'flex'} alignItems={'center'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Typography color={'primary'}>First Ultrasound</Typography>
                <Box
                    component="img"
                    sx={{ height: 80 }}
                    alt="Ultasound"
                    src={Ultasound}
                />
            </Box>
        </Paper>
    )
}

export default Records