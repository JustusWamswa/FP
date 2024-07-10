import { Box, Button, Divider, IconButton, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'


function Notifications({ handleClose, open }) {

    const style = {
        position: 'absolute',
        top: '5%',
        right: '5%',
        width: '30%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5,
        borderRadius: 3,
        overflowY: 'scroll',
        maxHeight: '90vh'
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                        Notifications
                    </Typography>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                    </IconButton>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ mt: 4 }}>
                        Adetokunbo Adebayo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum fermentum ipsum. Vestibulum tempus eros sit amet enim lacinia mollis.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography color={'primary'} >
                            Yesterday
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            12:03 pm
                        </Typography>
                        <Divider orientation='vertical' flexItem sx={{ bgcolor: 'gray', mx: 1 }} />
                        <Typography color={'primary'} >
                            Lorem Ipsum
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default Notifications