import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/streamline_waiting-appointments-calendar.png'

function RecentConsultations() {
    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography fontSize={'1.2rem'} fontWeight={'medium'} color={'primary'}>Recent Consultations</Typography>
            <Box display={'flex'} borderRadius={3} justifyContent={'space-between'} p={1} my={2} bgcolor={'secondary.main'}>
                <Box
                    component="img"
                    sx={{ height: 20 }}
                    alt="Icon"
                    src={Icon}
                />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'white'} fontSize={'1.2rem'}>Subject</Typography>
                        <Typography color={'white'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam nibh et mauris fermentum, sit amet varius sem lacinia.
                        </Typography>
                    </Box>
                    <Typography color={'white'} fontSize={'1.2rem'}>Date</Typography>
                </Stack>
            </Box>
            <Box display={'flex'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Box
                    component="img"
                    sx={{ height: 20 }}
                    alt="Icon"
                    src={Icon}
                />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'primary'} fontSize={'1.2rem'}>Subject</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam nibh et mauris fermentum, sit amet varius sem lacinia.
                        </Typography>
                    </Box>
                    <Typography color={'primary'} fontSize={'1.2rem'}>Date</Typography>
                </Stack>
            </Box>
            <Box display={'flex'} border={1} borderRadius={3} justifyContent={'space-between'} p={1} my={2}>
                <Box
                    component="img"
                    sx={{ height: 20 }}
                    alt="Icon"
                    src={Icon}
                />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'90%'}>
                    <Box>
                        <Typography color={'primary'} fontSize={'1.2rem'}>Subject</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam nibh et mauris fermentum, sit amet varius sem lacinia.
                        </Typography>
                    </Box>
                    <Typography color={'primary'} fontSize={'1.2rem'}>Date</Typography>
                </Stack>
            </Box>
        </Paper>
    )
}

export default RecentConsultations