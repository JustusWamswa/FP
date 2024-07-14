import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import meet from '../assets/meet.png'
import screen from '../assets/screen.png'
import healthy from '../assets/healthy.jpg'


function Section3() {
    return (
        <section id='section3'>
            <Box bgcolor={'#F2F2F2'} py={8}>
                <Typography variant='h4' color={'secondary.main'} mb={3} textAlign={'center'}>
                    Services
                </Typography>
                <Typography variant='h3' textAlign={'center'}>
                    Types of Services
                </Typography>
                <Typography variant='h6' mt={3} textAlign={'center'} width={'60%'} mx={'auto'}>
                    Explore the wide range of services SmartMamaCare offers to support you throughout your pregnancy journey.
                    From personalized recommendations and virtual consultations to a wealth of educational resources,
                    we are here to provide you with the care and information you need, anytime and anywhere.
                </Typography>
                <Stack direction={'row'} my={3} justifyContent={'space-evenly'} width={'80%'} mx={'auto'}>
                    <Box p={2} borderRadius={3} bgcolor={'white'} width={'23vw'}>
                        <Box height={'30vh'} borderRadius={3} sx={{ backgroundImage: `url(${healthy})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                        <Typography variant='h5' fontWeight={'bold'} textAlign={'center'} width={'80%'} mx={'auto'} mt={2}>
                            Personalized Health Recommendations
                        </Typography>
                        <Typography variant='h6' mt={1} textAlign={'center'} width={'80%'} mx={'auto'}>
                            Receive personalized health and wellness advice based on your unique needs and pregnancy stage.
                        </Typography>
                    </Box>
                    <Box p={2} borderRadius={3} bgcolor={'white'} width={'23vw'}>
                        <Box height={'30vh'} borderRadius={3} sx={{ backgroundImage: `url(${meet})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                        <Typography variant='h5' fontWeight={'bold'} textAlign={'center'} width={'80%'} mx={'auto'} mt={2}>
                            Virtual <br /> Consultations
                        </Typography>
                        <Typography variant='h6' mt={1} textAlign={'center'} width={'80%'} mx={'auto'}>
                            Get professional advice, ask questions, and discuss your concerns from the comfort of your home, ensuring you always have access to quality care.
                        </Typography>
                    </Box>
                    <Box p={2} borderRadius={3} bgcolor={'white'} width={'23vw'}>
                        <Box height={'30vh'} borderRadius={3} sx={{ backgroundImage: `url(${screen})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                        <Typography variant='h5' fontWeight={'bold'} textAlign={'center'} width={'80%'} mx={'auto'} mt={2}>
                            Educational <br /> Resources
                        </Typography>
                        <Typography variant='h6' mt={1} textAlign={'center'} width={'80%'} mx={'auto'}>
                            Access a comprehensive library of educational resources, including articles, videos, and tutorials on various pregnancy-related topics.
                        </Typography>
                    </Box>

                </Stack>
            </Box>
        </section>

    )
}

export default Section3