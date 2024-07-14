import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import pregnant from '../assets/pregnant.png'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined'

function Section2() {
    return (
        <section id='section2'>
            <Stack mt={'10%'} width={'90%'} mx={'auto'} direction={'row'} spacing={5} alignItems={'center'}>
                <Box width={'50%'} position={'relative'} minHeight={'100vh'}>
                    <Box height={'90%'} width={'80%'} borderRadius={5} zIndex={10} position={'absolute'} right={'10%'}
                        sx={{ backgroundImage: `url(${pregnant})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                    <Box component={'div'} height={'75%'} width={'80%'} borderRadius={5} border={'5px solid #F88379'} position={'absolute'} right={0} top={'35%'} zIndex={0} sx={{ transform: 'translate(0%, -35%)' }} />
                </Box>
                <Box width={'50%'}>
                    <Typography variant='h4' color={'secondary.main'} width={'90%'} mb={3}>
                        Welcome to SmartMamaCare
                    </Typography>
                    <Typography variant='h3' width={'90%'} >
                        Your Trusted Companion for a Healthy Pregnancy and Beyond
                    </Typography>
                    <Typography variant='h6' width={'90%'} mt={3} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius nunc dolor,
                        in euismod magna malesuada vel. Nullam aliquet, sapien eget dignissim tincidunt, velit
                        orci egestas nisi, id pretium mauris ante quis nulla. Suspendisse potenti.
                        Aliquam malesuada hendrerit nisl ut commodo.
                    </Typography>
                    <Box mt={3} display={'flex'}>
                        <Box width={'50%'}>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>

                        </Box>
                        <Box width={'50%'}>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography display={'flex'} alignItems={'center'} mb={2}>
                                <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                    <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                                </Avatar>
                                Lorem ipsum dolor sit amet
                            </Typography>

                        </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box display={'flex'}>
                        <Typography display={'flex'} alignItems={'center'} mb={2} color={'secondary'} variant='h4' width={'50%'}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 3, borderRadius: 3 }} >
                                <QuestionAnswerOutlinedIcon sx={{ color: 'white', width: '40%', height: '40%' }} />
                            </Avatar>
                            Free Health Consultation
                        </Typography>
                        <Typography display={'flex'} alignItems={'center'} mb={2} color={'secondary'} variant='h4' width={'50%'}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 3, borderRadius: 3 }} >
                                <SafetyCheckOutlinedIcon sx={{ color: 'white', width: '40%', height: '40%' }} />
                            </Avatar>
                            Safe Solution for Health
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </section>
    )
}

export default Section2