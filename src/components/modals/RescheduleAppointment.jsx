import { Box, Button, Divider, IconButton, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'


function RescheduleAppointment({ handleClose, open }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5,
        borderRadius: 3,
        overflowY: 'scroll',
        maxHeight: '95vh'
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                        Reschedule Appointment
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography mt={3} mb={1}>Appointment Title</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="" sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Typography mt={3} mb={1}>Time</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <TimePicker label="" sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Typography mt={3} mb={1}>Location</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Healthcare Provider</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Appointment Type</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Note</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} > Cancel </Button>
                        <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} > Confirm </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default RescheduleAppointment