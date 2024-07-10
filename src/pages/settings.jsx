import React from 'react'
import Title from '../components/Title'
import { Box, Button, Card, CardContent, Grid, Stack, styled, TextField, Typography } from '@mui/material'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'


function Settings() {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    return (
        <div>
            <Title text={"Settings"} />
            <Button variant='outlined' sx={{ textTransform: 'capitalize', mt: 2 }} > Edit Profile </Button>
            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={5} lg={3} >
                    <Stack justifyContent={'space-evenly'} sx={{ border: '1px gray solid', borderRadius: 3, p: 3, height: '100%' }} >
                        <Box sx={{ backgroundImage: `url(${user})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} height={300} width={'100%'} borderRadius={3} />
                        <Box border={'1px dashed lightblue'} borderRadius={3} height={'10vh'} bgcolor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} width={'100%'}>
                            <Button variant='outlined' sx={{ width: '70%', textTransform: 'capitalize' }} tabIndex={-1} component="label">
                                Browse File
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={7} lg={9}>
                    <Stack spacing={1} flex="1 1 0" >
                        <Box sx={{ border: '1px gray solid', borderRadius: 3, p: 3 }}> 
                            <Typography color={'secondary'} fontSize={'1.2rem'} >General Information</Typography>
                            <Stack direction={'row'} justifyContent={'space-evenly'}>
                                <Box width={'45%'}>
                                    <Typography mt={3} mb={1}>Name</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                    <Typography mt={3} mb={1}>Phone Number</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                </Box>
                                <Box width={'45%'}>
                                    <Typography mt={3} mb={1}>Email Address</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                    <Typography mt={3} mb={1}>Date of Birth</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{ border: '1px gray solid', borderRadius: 3, p: 3 }}> 
                            <Typography color={'secondary'} fontSize={'1.2rem'} >Additional Information</Typography>
                            <Stack direction={'row'} justifyContent={'space-evenly'}>
                                <Box width={'45%'}>
                                    <Typography mt={3} mb={1}>Emergency Contact</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                    <Typography mt={3} mb={1}>Primary Healthcare Provider</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                </Box>
                                <Box width={'45%'}>
                                    <Typography mt={3} mb={1}>Current Health Status</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                    <Typography mt={3} mb={1}>Allergies and Medical Conditions</Typography>
                                    <TextField id="outlined-basic" label="" variant="outlined" size='small' fullWidth placeholder='Enter text' />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent={'end'} alignItems={'center'} mt={3}>
                <Button variant='outlined' sx={{ px: 8, textTransform: 'capitalize', mr: 3 }} > Cancel </Button>
                <Button variant='contained' sx={{ px: 8, textTransform: 'capitalize' }} > Update </Button>
            </Box>
        </div>
    )
}

export default Settings