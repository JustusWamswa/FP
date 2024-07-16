import { Box, Button, Divider, IconButton, Modal, Stack, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import NoteAddIcon from '@mui/icons-material/NoteAdd';



function EditResource({ handleClose, open }) {

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
            <Box sx={style} >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                        Edit Resource
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
                            <Typography mt={3} mb={1}>Title</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                            <Typography mt={3} mb={1}>Description</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                            <Typography mt={3} mb={1}>Author</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                        </Box>
                        <Box width={'45%'}>
                            <Typography mt={3} mb={1}>Category</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                            <Typography mt={3} mb={1}>Resource Type</Typography>
                            <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                            <Typography mt={3} mb={1}>Publication Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="" sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Box>
                    </Stack>
                    <Typography mt={3} mb={1}>Tags</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} mt={4} >Attach an image</Typography>
                    <Box border={'1px dashed lightblue'} borderRadius={3} height={'20vh'} bgcolor={'white'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} mt={2}>
                        <Box display={'flex'} alignItems={'center'}>
                            <NoteAddIcon sx={{ color: 'gray', mr: 1 }} />
                            <Typography color={'gray'}>Choose image</Typography>
                        </Box>
                        <Button variant='outlined' sx={{ width: '30%', textTransform: 'capitalize' }} tabIndex={-1} component="label">
                            Browse File
                            <VisuallyHiddenInput type="file" />
                        </Button>
                    </Box>
                    <Typography mt={3} mb={1}>Content</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' multiline rows={4} />
                    <Typography mt={3} mb={1}>Quote</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' multiline rows={4} />
                    <Box display={'flex'} justifyContent={'end'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} onClick={handleClose} > Cancel </Button>
                        <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} > Save </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditResource