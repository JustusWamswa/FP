import { SignedIn, SignedOut, SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    const { isSignedIn } = useAuth()

    useEffect(() => {
        if (isSignedIn) {
            navigate('/app/dashboard')
        }
    }, [isSignedIn, navigate])

    return (
        <SignedOut>
            <Box width={'100%'} height={'100vh'} sx={{ backgroundColor: 'bgdark.main' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Box display={'flex'}>
                    <Typography color={'white'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 40, md: 60 }}>Smart</Typography>
                    <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 40, md: 60 }}>MamaCare</Typography>
                </Box>
                <Typography width={{ xs: '80%', md: '40%' }} textAlign={'center'} mt={5} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra orci a elit faucibus suscipit vel vulputate libero.
                </Typography>
                <Stack direction={'row'} spacing={5} mt={5}>
                    <SignInButton>
                        <Button variant='contained' sx={{ paddingX: '3rem', textTransform: 'capitalize' }} > Sign In</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button variant='contained' color='secondary' sx={{ paddingX: '3rem', textTransform: 'capitalize' }} > Sign Up</Button>
                    </SignUpButton>
                </Stack>
            </Box>
        </SignedOut>
    )
}

export default Home