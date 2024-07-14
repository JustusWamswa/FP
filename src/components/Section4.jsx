import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import test from '../assets/test.png'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined'
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

function Section4() {
    return (
        <Stack my={'5rem'} width={'90%'} mx={'auto'} direction={'row-reverse'} spacing={5} alignItems={'center'}>
            <Box width={'40%'} position={'relative'} minHeight={'80vh'}>
                <Box height={'88%'} width={'80%'} borderRadius={5} zIndex={10} position={'absolute'} left={'10%'}
                    sx={{ backgroundImage: `url(${test})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></Box>
                <Box component={'div'} height={'65%'} width={'80%'} borderRadius={5} border={'5px solid #F88379'} position={'absolute'} left={0} top={'35%'} zIndex={0} sx={{ transform: 'translate(0%, -35%)' }} />
                <Box component={'div'} height={'15%'} width={'40%'} borderRadius={5} bgcolor={'secondary.main'} position={'absolute'} right={"10%"} bottom={0} zIndex={20} sx={{ transform: 'translate(0%, -35%)' }} p={3} display={'flex'} alignItems={'center'}>
                    <Typography variant='h6' color={'white'}>Tailored Guidance for Your Pregnancy Journey</Typography>
                </Box>
            </Box>
            <Box width={'60%'} pl={10}>
                <Typography variant='h4' color={'secondary.main'} width={'90%'} mb={3}>
                    Why Choose SmartMamaCare
                </Typography>
                <Typography variant='h3' width={'70%'} >
                    Your Trusted Partner in Pregnancy and Beyond
                </Typography>
                <Box mt={3} display={'flex'}>
                    <Box bgcolor={'secondary.main'} p={3} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'30%'} borderRadius={5}>
                        <Avatar sx={{ bgcolor: 'white', width: 80, height: 80, mr: 3 }} >
                            <LocalPhoneOutlinedIcon sx={{ color: 'secondary.main' }} />
                        </Avatar>
                        <Typography variant='h6' textAlign={'center'} color={'white'} sx={{ mt: 3 }} >
                        Ask us any question by calling <br /> +2345 008986986
                        </Typography>
                    </Box>
                    <Box width={'60%'} ml={5}>
                        <Typography variant='h6' width={'100%'} mb={3} >
                            Choosing the right support during your pregnancy is crucial. SmartMamaCare is dedicated to providing you with comprehensive,
                            personalized, and convenient care to ensure you and your baby’s well-being. Discover why thousands of mothers trust SmartMamaCare.
                        </Typography>
                        <Typography display={'flex'} alignItems={'center'} mb={2}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                            </Avatar>
                            Personalized Care
                        </Typography>
                        <Typography display={'flex'} alignItems={'center'} mb={2}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                            </Avatar>
                            Convenient Access to Experts
                        </Typography>
                        <Typography display={'flex'} alignItems={'center'} mb={2}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                            </Avatar>
                            Comprehensive Educational Resources
                        </Typography>
                        <Typography display={'flex'} alignItems={'center'} mb={2}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 20, height: 20, mr: 3 }} >
                                <ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />
                            </Avatar>
                            User-Friendly Experience
                        </Typography>

                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}

export default Section4