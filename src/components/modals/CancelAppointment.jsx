import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

function CancelAppointment({ handleClose, open }) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5,
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                        Cancel Appointment
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete this appointment?
                </Typography>
                <Box display={'flex'} justifyContent={'end'} alignItems={'center'} mt={3}>
                    <Button variant='outlined' onClick={handleClose} sx={{ mr: 3, textTransform: 'capitalize' }} > Cancel </Button>
                    <Button variant='contained' sx={{ textTransform: 'capitalize' }} > Confirm </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default CancelAppointment