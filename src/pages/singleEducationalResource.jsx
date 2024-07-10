import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import food from '../assets/food.jpg'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'


function SingleEducationalResource() {

    const navigate = useNavigate()

    return (
        <Box width={'80%'}>
            <Box sx={{ position: 'relative', backgroundImage: `url('${food}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', minHeight: '40vh' }}>
                <Box sx={{ width: '100%', minHeight: '100%', backgroundColor: 'rgba(0,0,0,0.5)', p: 3 }}>
                    <Button
                        startIcon={<ArrowBackIosIcon />}
                        variant='contained'
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                    <Typography variant="h6" fontWeight={'bold'} color={'white'} sx={{ mt: 20 }}>Details</Typography>
                    <Typography variant="h4" fontWeight={'bold'} color={'white'} sx={{ mt: 3 }}>Healthy Eating During Pregnancy:</Typography>
                    <Typography variant="h4" fontWeight={'bold'} color={'white'}>Nutrition, Dr. Emily White</Typography>
                    <Typography sx={{ width: '50%', mt: 3 }} color={'white'} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium sem eget sapien vulputate
                        vulputate et a nunc. Mauris quis faucibus nunc. Donec sed vestibulum libero. Pellentesque a mauris
                        convallis, laoreet velit eget, pulvinar lacus. Pellentesque ipsum arcu, tincidunt vel elit vitae,
                        ultrices fermentum dui. Curabitur pellentesque a velit vitae rhoncus. Ut quis interdum nulla.
                        Suspendisse feugiat ante vitae purus scelerisque suscipit ac vitae mi. Donec aliquam volutpat ex nec interdum.
                    </Typography>
                </Box>
            </Box>
            <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <Avatar alt="User" src={user} sx={{ height: 50, width: 50 }} />
                <Box ml={2} fontStyle={'italic'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Typography variant="body2" fontWeight={'bold'} component="div">
                        Dr. Emily White
                    </Typography>
                    <Typography variant="body2" component="div">
                        June 20, 2024
                    </Typography>
                </Box>
            </Stack>
            <Typography variant="body2" component="div" sx={{ mt: 3 }}>
                Aenean aliquet est eu ullamcorper rutrum. Morbi euismod volutpat consectetur. Nullam lacinia rutrum neque.
                Cras efficitur ligula elit, eget efficitur ipsum tincidunt vehicula. Quisque et interdum arcu.
                Nullam porta ac felis sit amet ultricies. Donec a neque quis tellus bibendum finibus. Nullam fermentum pulvinar
                consectetur. Vivamus mattis, sem nec blandit rhoncus, nulla ligula dictum sem, sit amet porttitor velit quam eu nibh.
                Praesent vestibulum, leo ut pharetra cursus, nisi nisi semper odio, at venenatis elit enim et nisi. Nulla facilisi.
                Aenean condimentum sapien elit, et maximus nisl lobortis ut. Morbi vulputate, augue non suscipit semper, neque ex venenatis
                sapien, vitae tempus lectus lectus feugiat sem. In hac habitasse platea dictumst. Praesent egestas rutrum sapien et faucibus.
            </Typography>
            <Box mt={3} position={'relative'}>
                <FormatQuoteIcon sx={{color: 'primary.main', position: 'absolute', top: -15, left: 15, width: 30, height: 30}} />
                <Typography variant="body1" component="div" sx={{ bgcolor: '#b1c8de', borderLeft: '8px solid #007bff', pl: 3, py: 5 }} color={'primary'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet orci orci.
                    Cras at ipsum ultricies, pulvinar erat in, sodales urna. Pellentesque cursus pretium enim,
                    elementum egestas nulla feugiat vel. Nunc venenatis, eros id fringilla consequat, quam enim ultricies ex,
                    ac dignissim purus libero ut diam.
                </Typography>
            </Box>
            <Typography variant="body2" component="div" sx={{ mt: 3 }}>
                Aenean aliquet est eu ullamcorper rutrum. Morbi euismod volutpat consectetur. Nullam lacinia rutrum neque.
                Cras efficitur ligula elit, eget efficitur ipsum tincidunt vehicula. Quisque et interdum arcu.
                Nullam porta ac felis sit amet ultricies. Donec a neque quis tellus bibendum finibus. Nullam fermentum pulvinar
                consectetur. Vivamus mattis, sem nec blandit rhoncus, nulla ligula dictum sem, sit amet porttitor velit quam eu nibh.
                Praesent vestibulum, leo ut pharetra cursus, nisi nisi semper odio, at venenatis elit enim et nisi. Nulla facilisi.
                Aenean condimentum sapien elit, et maximus nisl lobortis ut. Morbi vulputate, augue non suscipit semper, neque ex venenatis
                sapien, vitae tempus lectus lectus feugiat sem. In hac habitasse platea dictumst. Praesent egestas rutrum sapien et faucibus.
            </Typography>
        </Box>
    )
}

export default SingleEducationalResource