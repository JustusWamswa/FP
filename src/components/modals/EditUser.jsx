import { Box, Button, Divider, IconButton, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'


function EditUser({ handleClose, open }) {

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
                        Edit User Information
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography mt={3} mb={1}>Name</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Email Address</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Phone Number</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='+91 12345 67890' />
                    <Typography mt={3} mb={1}>Current Health Status</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Date of Birth</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="" sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <Typography mt={3} mb={1}>Emergency Contact</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='+91 12345 67890' />
                    <Typography mt={3} mb={1}>Primary Healthcare Provider</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography mt={3} mb={1}>Allergies and Medical Conditions</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} onClick={handleClose} > Cancel </Button>
                        <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} > Save </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditUser