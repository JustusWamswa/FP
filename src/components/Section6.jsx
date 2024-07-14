import { Avatar, Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'


function Section6() {
    return (
        <section id='section6'>
            <Stack my={'5rem'} width={'100%'} mx={'auto'} direction={'row-reverse'} spacing={5} alignItems={'center'} mt={'8%'} py={5} px={10} bgcolor={"#F2F2F2"} justifyContent={'space-evenly'}>
                <Box width={'30%'} position={'relative'} bgcolor={'secondary.main'} color={'white'} minHeight={'80vh'} p={3}>
                    <Typography variant='h4' fontSize={'1.5rem'} mb={3}>
                        Contact Us
                    </Typography>
                    <Typography variant='h3' fontSize={'2rem'} >
                        Get In Touch With Us
                    </Typography>
                    <Typography mt={5}>Name</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }} fullWidth placeholder='Enter text' />
                    <Typography mt={3}>Email</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }} fullWidth placeholder='Enter text' />
                    <Typography mt={3} >Message</Typography>
                    <TextField id="outlined-basic" label="" variant="outlined" size='small' sx={{ bgcolor: 'white' }} InputProps={{ sx: { borderRadius: 0 } }} fullWidth placeholder='Enter text' multiline rows={5} />
                    <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize', fontSize: '1.2rem', py: 1, width: '100%', mt: 5, mb: 5, bgcolor: 'secondary.dark', ":hover": { bgcolor: 'secondary.dark' } }}
                        onClick={() => navigate('/login')}
                    >
                        Send Message
                    </Button>
                </Box>
                <Box width={'50%'} pl={10}>
                    <Typography variant='h4' color={'secondary.main'} width={'90%'} mb={3}>
                        How It Works?
                    </Typography>
                    <Typography variant='h3' width={'70%'} >
                        Simple Steps to a Healthier Pregnancy
                    </Typography>
                    <Box mt={3} >
                        <Box p={3} display={'flex'}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 5, borderRadius: 3 }} >
                                <Typography variant='h3' fontWeight={'bold'} sx={{ color: 'white' }} >1</Typography>
                            </Avatar>
                            <Box>
                                <Typography variant='h5' width={'100%'} mb={2} >
                                    Sign Up
                                </Typography>
                                <Typography variant='subtitle1' width={'100%'} >
                                    Create an account by providing your basic details and pregnancy information to receive personalized care.
                                </Typography>
                            </Box>
                        </Box>
                        <Box p={3} display={'flex'}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 5, borderRadius: 3 }} >
                                <Typography variant='h3' fontWeight={'bold'} sx={{ color: 'white' }} >2</Typography>
                            </Avatar>
                            <Box>
                                <Typography variant='h5' width={'100%'} mb={2} >
                                    Personalize Your Experience
                                </Typography>
                                <Typography variant='subtitle1' width={'100%'} >
                                    Our intelligent system uses this information to tailor health recommendations, schedule reminders,
                                    and offer relevant educational resources that suit your unique needs.
                                </Typography>
                            </Box>
                        </Box>
                        <Box p={3} display={'flex'}>
                            <Avatar sx={{ bgcolor: 'secondary.main', width: 80, height: 80, mr: 5, borderRadius: 3 }} >
                                <Typography variant='h3' fontWeight={'bold'} sx={{ color: 'white' }} >3</Typography>
                            </Avatar>
                            <Box>
                                <Typography variant='h5' width={'100%'} mb={2} >
                                    Stay Connected and Informed
                                </Typography>
                                <Typography variant='subtitle1' width={'100%'} >
                                    Easily schedule and manage your appointments with healthcare professionals, access virtual
                                    consultations, and explore our extensive library of educational resources.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </section>
    )
}

export default Section6