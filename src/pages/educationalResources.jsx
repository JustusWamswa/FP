import React from 'react'
import Title from '../components/Title'
import { Grid, Typography } from '@mui/material'
import ResourceCard from '../components/ResourceCard'

function EducationalResources() {
    return (
        <div>
            <Title text={"Educational Resources"} />
            <Typography sx={{my:1}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis massa magna. Aenean vestibulum ipsum ut euismod fermentum.
            </Typography>
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
        </div>
    )
}

export default EducationalResources