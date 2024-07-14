import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import docs from '../assets/docs.png'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'


function Footer() {

    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ position: 'relative', backgroundImage: `url('${docs}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', minHeight: '20vh' }}>
                <Box sx={{ width: '100%', minHeight: '20vh', p: 3, pl: 12 }} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                    <Typography variant="h4" fontWeight={'bold'} color={'white'} sx={{ mt: 3, width: '25%' }}>
                        Get Yourself The Better HealthCare You Deserve
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ textTransform: 'capitalize', fontSize: '1.2rem', width: '15%', mt: 5, py: 2, bgcolor: 'secondary.main', ":hover": { bgcolor: 'secondary.dark' } }}
                        onClick={() => navigate('/home')}
                    >
                        Join Now
                    </Button>
                </Box>
            </Box>
            <Box bgcolor={'secondary.main'} p={10} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Stack direction={'row'} justifyContent={'space-evenly'} >
                    <Box width={'25%'} p={2} mr={5}>
                        <Box display={'flex'} alignItems={'end'}>
                            <Box component={'img'} src={logo} height={50} />
                            <Typography color={'primary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>Smart</Typography>
                            <Typography color={'white'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>MamaCare</Typography>
                        </Box>
                        <Typography color={'white'} variant='subtitle1' mt={3}>
                            SmartMamaCare is your trusted companion for a healthy and informed pregnancy journey. With personalized care,
                            virtual consultations, and a wealth of educational resources, we are dedicated to supporting you every step of the way.
                        </Typography>
                    </Box>
                    <Box width={'15%'} p={2}>
                        <Typography color={'white'} variant='subtitle1' fontWeight={'bold'} mb={2}>
                            Quick Links
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1}>
                            About Us
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Services
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Resources
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Testimonials
                        </Typography>
                    </Box>
                    <Box width={'15%'} p={2}>
                        <Typography color={'white'} variant='subtitle1' fontWeight={'bold'} mb={2}>
                            Information
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Services
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1}>
                            About Us
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Who We Are
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} >
                            Contact
                        </Typography>
                    </Box>
                    <Box width={'25%'} p={2}>
                        <Typography color={'white'} variant='subtitle1' fontWeight={'bold'} mb={2}>
                            Contact Us
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} display={'flex'} alignItems={'center'}>
                            <LocationOnOutlinedIcon sx={{ mr: 2 }} />
                            African  Leadership Campus
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} display={'flex'} alignItems={'center'}>
                            <LocalPhoneOutlinedIcon sx={{ mr: 2 }} />
                            Tel:+233 530 456 789
                        </Typography>
                        <Typography color={'white'} variant='subtitle1' mb={1} display={'flex'} alignItems={'center'}>
                            <EmailOutlinedIcon sx={{ mr: 2 }} />
                            smartmamacare@gmail.com
                        </Typography>
                    </Box>
                </Stack>
                <Divider sx={{ bgcolor: 'white', my: 5, mx: 'auto', width: '100%' }} />
                <Typography color={'white'} variant='caption' mb={1} textAlign={'center'}>
                    Copyright SmartMamaCare, 2024. All Rights Reserved
                </Typography>
            </Box>
        </>
    )
}

export default Footer