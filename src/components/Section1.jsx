import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import mother from '../assets/mother.png'
import { useNavigate } from 'react-router-dom'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function Section1() {

    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ position: 'relative', backgroundImage: `url('${mother}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', minHeight: '90vh' }}>
                <Box sx={{ width: '100%', minHeight: '90vh', backgroundColor: 'rgba(0,0,0,0.3)', p: 3, pl: 12 }} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Typography variant="h2" fontWeight={'bold'} color={'white'} sx={{ mt: 3, width: '45%' }}>
                        Your Trusted Companion for a Healthy Pregnancy and Beyond
                    </Typography>
                    <Typography variant='h6' sx={{ width: '45%', mt: 3 }} color={'white'} >
                        Join thousands of mothers who are taking control of their pregnancy journey with
                        personalized health recommendations, easy appointment scheduling, and expert advice.
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{ textTransform: 'capitalize', fontSize: '1.2rem', py: 1, width: '15%', mt: 5, bgcolor: 'secondary.main', ":hover": { bgcolor: 'secondary.dark' } }}
                        onClick={() => navigate('/home')}
                    >
                        Learn More
                    </Button>
                </Box>
                <Stack direction={'row'} position={'absolute'} bottom={'-12%'} left={'50%'} borderRadius={3} overflow={'hidden'} sx={{ transform: 'translate(-50%, 0%)' }}>
                    <Box bgcolor={'#E5695C'} p={3} display={'flex'} alignItems={'center'} width={'25vw'}>
                        <Avatar sx={{ bgcolor: '#F88379', width: 80, height: 80, mr: 3 }} >
                            <MedicalServicesOutlinedIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" color={'white'}>
                                Our Services
                            </Typography>
                            <Typography variant='subtitle1' color={'white'} sx={{ mt: 1 }} >
                                Discover a wide range of services tailored to support you throughout your pregnancy journey and beyond.
                            </Typography>
                        </Box>
                    </Box>
                    <Box bgcolor={'#F88379'} p={3} display={'flex'} alignItems={'center'} width={'25vw'}>
                        <Avatar sx={{ bgcolor: '#FFB3A7', width: 80, height: 80, mr: 3 }} >
                            <CalendarMonthOutlinedIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" color={'white'}>
                                Appointments
                            </Typography>
                            <Typography variant='subtitle1' color={'white'} sx={{ mt: 1 }} >
                                Easily schedule and manage your appointments with our intuitive calendar and reminder system.
                            </Typography>
                        </Box>
                    </Box>
                    <Box bgcolor={'#FFB3A7'} p={3} display={'flex'} alignItems={'center'} width={'25vw'}>
                        <Avatar sx={{ bgcolor: '#E5695C', width: 80, height: 80, mr: 3 }} >
                            <PeopleAltOutlinedIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Box>
                            <Typography variant="h5" color={'white'}>
                                Our Expertise
                            </Typography>
                            <Typography variant='subtitle1' color={'white'} sx={{ mt: 1 }} >
                                Benefit from the knowledge and experience of our healthcare professionals and specialists.
                            </Typography>
                        </Box>
                    </Box>

                </Stack>
            </Box>
        </>
    )
}

export default Section1