import { Box, Button, Divider, IconButton, Modal, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import NoteAddIcon from '@mui/icons-material/NoteAdd';



function AddHealthRecord({ handleClose, open, handleChange, handleFileChange, handleSubmit, recordDetails, file }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5,
        borderRadius: 3,
        overflowY: 'scroll',
        maxHeight: '95vh'
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })


    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                        Add Health Record
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Box>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Box width={'45%'}>
                            <Typography mt={3} mb={1}>Record ID</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' disabled fullWidth placeholder='Enter text' />
                            <Typography mt={3} mb={1}>Date of Record</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' type='date'
                                value={recordDetails?.date}
                                name='date'
                                onChange={handleChange}
                            />
                            <Typography mt={3} mb={1}>Diagnosis</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                            value={recordDetails?.diagnosis}
                            name='diagnosis'
                            onChange={handleChange}
                             />
                        </Box>
                        <Box width={'45%'}>
                            <Typography mt={3} mb={1}>Healthcare Provider</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                            value={recordDetails?.healthcareProvider}
                            name='healthcareProvider'
                            onChange={handleChange}
                             />
                            <Typography mt={3} mb={1}>Type of Record</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' 
                            value={recordDetails?.type}
                            name='type'
                            onChange={handleChange}
                            />
                            <Typography mt={3} mb={1}>Follow-Up Appointments</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth disabled placeholder='Enter text' />
                        </Box>
                    </Stack>
                    <Typography mt={3} mb={1}>Tests Conducted</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text'
                    value={recordDetails?.testsConducted}
                    name='testsConducted'
                    onChange={handleChange}
                     />
                    <Typography mt={3} mb={1}>Results</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' 
                    value={recordDetails?.results}
                    name='results'
                    onChange={handleChange}
                    />
                    <Typography mt={3} mb={1}>Treatment Plan</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' 
                    value={recordDetails?.treatmentPlan}
                    name='treatmentPlan'
                    onChange={handleChange}
                    />
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} mt={4} >Attach an image</Typography>
                    <Box border={'1px dashed lightblue'} borderRadius={3} height={'20vh'} bgcolor={'white'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} mt={2}>
                        <Box display={'flex'} alignItems={'center'}>
                            <NoteAddIcon sx={{ color: 'gray', mr: 1 }} />
                            <Typography color={'gray'}>Choose image</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'end'}>
                        <Button variant='outlined' sx={{ width: '100%', textTransform: 'capitalize' }} tabIndex={-1} component="label" >
                            Browse File
                            <input hidden type="file" 
                            name='recordFile'
                            onChange={handleFileChange}
                            />
                        </Button>
                        <Typography ml={1}>{recordDetails?.recordFile}</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'end'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} onClick={handleClose} > Cancel </Button>
                        <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} type='submit' > Confirm </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddHealthRecord