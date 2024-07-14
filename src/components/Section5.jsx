import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import team from '../assets/team.png'
import { useNavigate } from 'react-router-dom'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import StarIcon from '@mui/icons-material/Star'

function Section5({handleNavigate}) {

    const navigate = useNavigate()

    return (
        <section id='section5'>
            <Box sx={{ position: 'relative', backgroundImage: `url('${team}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', minHeight: '90vh' }}>
                <Box sx={{ width: '100%', minHeight: '90vh', backgroundColor: 'rgba(0,0,0,0.4)', p: 3, pl: 12 }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 3 }} >
                        <PlayArrowRoundedIcon sx={{ color: 'white', width: '80%', height: '80%' }} />
                    </Avatar>
                    <Typography variant="h2" fontWeight={'bold'} color={'white'} sx={{ mt: 5 }}>
                        Comprehensive Care at Your Fingertips
                    </Typography>
                    <Typography variant='h6' textAlign={'center'} sx={{ width: '80%', mt: 3 }} color={'white'} >
                        Our intuitive and easy-to-navigate app is designed to make your pregnancy journey smoother.
                        From scheduling appointments to accessing health records and resources, SmartMamaCare offers a seamless and supportive experience.
                    </Typography>
                </Box>
                <Stack direction={'row'} position={'absolute'} bottom={'-12%'} left={'50%'} borderRadius={3} overflow={'hidden'} sx={{ transform: 'translate(-50%, 0%)' }}>
                    <Box bgcolor={'secondary.main'} p={3} width={'40vw'}>
                        <Box>
                            <Typography fontSize={'1rem'} color={'white'}>
                                What Our Clients Say?
                            </Typography>
                            <Typography variant="h5" color={'white'} mt={3} mb={1}>
                                Hear from Our Happy Mothers
                            </Typography>
                            <Typography variant='subtitle1' color={'white'} sx={{ mt: 1 }} >
                                At SmartMamaCare, we are proud to have supported countless mothers throughout their pregnancy journeys.
                                Don’t just take our word for it—read what some of our satisfied users have to say about their experiences
                                with our app. Their stories highlight the impact SmartMamaCare can have on your pregnancy and beyond.
                            </Typography>
                        </Box>
                        <Button
                            variant='contained'
                            sx={{ textTransform: 'capitalize', width: '25%', mt: 2, bgcolor: 'secondary.dark', ":hover": { bgcolor: 'secondary.dark' } }}
                            onClick={() => handleNavigate('#section6')}
                        >
                            Contact Us
                        </Button>
                    </Box>
                    <Box bgcolor={'#F2F2F2'} p={3} width={'40vw'}>
                        <Box>
                            <Box mb={3}>
                                <StarIcon sx={{color: '#FFD700', mr: 1}} />
                                <StarIcon sx={{color: '#FFD700', mr: 1}} />
                                <StarIcon sx={{color: '#FFD700', mr: 1}} />
                                <StarIcon sx={{color: '#FFD700', mr: 1}} />
                                <StarIcon sx={{color: '#FFD700', mr: 1}} />
                            </Box>
                            <Typography variant='subtitle1' sx={{ mt: 1 }} >
                                At SmartMamaCare, we are proud to have supported countless mothers throughout their pregnancy journeys.
                                Don’t just take our word for it—read what some of our satisfied users have to say about their experiences
                                with our app. Their stories highlight the impact SmartMamaCare can have on your pregnancy and beyond.
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={'bold'} mt={3} mb={1}>
                                Jessica M.
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </section>
    )
}

export default Section5