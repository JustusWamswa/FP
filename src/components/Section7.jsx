import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ResourceCard from './ResourceCard'
import { useNavigate } from 'react-router-dom'

function Section7() {

    const navigate = useNavigate()

    return (
        <section id='section7'>
            <Box width={'75%'} mx={'auto'} mb={10}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={10}>
                    <Box width={'30%'}>
                        <Typography variant='h4' color={'secondary.main'} mb={3}>
                            Educational Resources
                        </Typography>
                        <Typography variant='h3' >
                            Empower Yourself with Knowledge
                        </Typography>
                    </Box>
                    <Typography variant='h6' width={'40%'} mt={3} >
                        At SmartMamaCare, we believe that informed mothers make the best decisions for
                        themselves and their babies. Our extensive library of educational resources provides
                        you with the information you need to navigate your pregnancy with confidence.
                    </Typography>
                    <Button variant='contained' sx={{ textTransform: 'capitalize', fontSize: '1.2rem', py: 1, width: '10%', mt: 5, mb: 5, bgcolor: 'secondary.main', ":hover": { bgcolor: 'secondary.dark' } }}
                        onClick={() => navigate('/app/educationalresources')}
                    >
                        View More
                    </Button>
                </Stack>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <ResourceCard />
                    </Grid>
                    <Grid item xs={4}>
                        <ResourceCard />
                    </Grid>
                    <Grid item xs={4}>
                        <ResourceCard />
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Section7