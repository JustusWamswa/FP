import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import food from '../assets/food.jpg'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'
import { Avatar, Box, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function ResourceCard() {

    const navigate = useNavigate()

    return (
        <Card>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={food}
                    title="food"
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#fff',
                    }}
                >
                    <Button
                        variant='contained'
                        sx={{ textTransform: 'capitalize', bgcolor: 'secondary.main', ":hover": { bgcolor: 'secondary.dark' }, position: 'absolute', top: 8, left: 8 }}
                        onClick={() => navigate(`/app/educationalResources/${1}`)}
                    >
                        Read More
                    </Button>
                    <Typography variant="h6" color={'white'} component="div" sx={{ position: 'absolute', bottom: 8, left: 8 }}>
                        Healthy Eating During Pregnancy
                    </Typography>

                </Box>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Nutrition
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    LDonec sed vestibulum libero. Pellentesque a mauris convallis,
                    laoreet velit eget, pulvinar lacus. Pellentesque ipsum arcu,
                    tincidunt vel elit vitae, ultrices fermentum dui. Curabitur
                    pellentesque a velit vitae rhoncus.
                </Typography>
                <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                    <Avatar alt="User" src={user} sx={{ height: 50, width: 50 }} />
                    <Box ml={2} fontStyle={'italic'}>
                        <Typography variant="body2" fontWeight={'bold'} component="div">
                            Dr. Emily White
                        </Typography>
                        <Typography variant="body2" component="div">
                            June 20, 2024
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default ResourceCard