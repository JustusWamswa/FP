import { Box, Button, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function Support() {

    const navigate = useNavigate()

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
        <Box width={'60%'} mx={'auto'} >
            <Typography color={'secondary'} fontSize={'1.2rem'} textAlign={'center'} >Hello Grace, how can we help you today?</Typography>
            <Box>
                <Typography mt={5} mb={1}>Subject</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                <Typography mt={5} mb={1}>Description</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' multiline rows={7} />
            </Box>
            <Typography fontSize={'1.2rem'} fontWeight={'bold'} mt={4} >Attach an image</Typography>
            <Typography color={'gray'}>Hello Grace, how can we help you today?</Typography>
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
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={3}>
                <Button variant='outlined' onClick={() => navigate(-1)} sx={{ width: '30%', textTransform: 'capitalize' }} > Cancel </Button>
                <Button variant='contained' onClick={() => navigate(-1)} sx={{ width: '30%', textTransform: 'capitalize' }} > Submit </Button>
            </Box>
        </Box>
    )
}

export default Support