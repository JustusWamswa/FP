import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


function Landing() {

    const handleNavigate = (hash) => {
        if (hash) {
            const element = document.getElementById(hash.substring(1))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <Box bgcolor={'white'}>
            <Typography textAlign={'center'} color={'white'} sx={{ bgcolor: 'secondary.main', p: 3 }}>
                Phone: +234 0-7098980 687909 &nbsp;&nbsp; Email: smartmamacare@gmail.com &nbsp;&nbsp; Address: African Campus
            </Typography>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'90%'} mx={'auto'} p={3}>
                <Box display={'flex'} alignItems={'end'}>
                    <Box component={'img'} src={logo} height={50} />
                    <Typography color={'primary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>Smart</Typography>
                    <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>MamaCare</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} width={'30%'}>
                    <Typography variant='h6' sx={{":hover": {cursor: 'pointer', color: 'secondary.main'}}} onClick={() => handleNavigate('#section2')}>About Us</Typography>
                    <Typography variant='h6' sx={{":hover": {cursor: 'pointer', color: 'secondary.main'}}} onClick={() => handleNavigate('#section3')}>Services</Typography>
                    <Typography variant='h6' sx={{":hover": {cursor: 'pointer', color: 'secondary.main'}}} onClick={() => handleNavigate('#section7')}>Resources</Typography>
                    <Typography variant='h6' sx={{":hover": {cursor: 'pointer', color: 'secondary.main'}}} onClick={() => handleNavigate('#section5')}>Testimonials</Typography>
                </Box>
                <Button
                    sx={{ bgcolor: 'secondary.main', textTransform: 'capitalize', fontSize: '1.2rem', py: 1, ":hover": { bgcolor: 'secondary.dark' }, px: 3, color: 'white' }}
                    onClick={() => handleNavigate('#section6')}
                >
                    Contact Us
                </Button>
            </Box>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 handleNavigate={handleNavigate} />
            <Section6 />
            <Section7 />
            <Footer />
        </Box>
    )
}

export default Landing