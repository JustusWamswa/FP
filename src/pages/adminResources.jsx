import React, { useState } from 'react'
import Summary from '../components/Summary'
import { Box, Button, Grid } from '@mui/material'
import Title from '../components/Title'
import ResourceCard from '../components/ResourceCard'
import AddResource from '../components/modals/AddResource'
import EditResource from '../components/modals/EditResource'
import DeleteResource from '../components/modals/DeleteResource'

function AdminResources() {

    const [addOpen, setAddOpen] = useState(false)
    const handleAddOpen = () => setAddOpen(true)
    const handleAddClose = () => setAddOpen(false)


    return (
        <>
            <Summary />
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                <Title text={'Resources'} />
                <Button variant='contained' onClick={handleAddOpen} sx={{ px: 8, textTransform: 'capitalize' }} > Add Resources </Button>
            </Box>
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
            <AddResource handleClose={handleAddClose} open={addOpen} />
        </>
    )
}

export default AdminResources