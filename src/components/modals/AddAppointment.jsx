import { Box, Button, Divider, IconButton, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'


function AddAppointment({ handleClose, open, setAppointmentDetails, appointmentDetails, addAppointment }) {
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setAppointmentDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }))
    }


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
                        Add Appointment
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography mt={3} mb={1}>Appointment Title</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                        value={appointmentDetails?.appointmentTitle}
                        name='appointmentTitle'
                        onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Date</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' type='date'
                        value={appointmentDetails?.date}
                        name='date'
                        onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Time</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' type='time'
                        value={appointmentDetails?.time}
                        name='time'
                        onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Location</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                    value={appointmentDetails?.location}
                    name='location'
                    onChange={handleChange}
                     />
                    <Typography mt={3} mb={1}>Healthcare Provider</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                    value={appointmentDetails?.healthcareProvider}
                    name='healthcareProvider'
                    onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Appointment Type</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' 
                    value={appointmentDetails?.appointmentType}
                    name='appointmentType'
                    onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Note</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                    value={appointmentDetails?.note}
                    name='note'
                    onChange={handleChange}
                     />
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} onClick={handleClose} > Cancel </Button>
                        <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} onClick={() => addAppointment({...appointmentDetails})} > Confirm </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddAppointment