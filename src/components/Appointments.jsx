import React from 'react'
import Title from './Title'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

function Appointments() {

    const rows = []
    for (let i = 0; i < 5; i++) {
        rows.push(<TableRow
            key={i}
            sx={ i == 2 ? 
                {'&:last-child td, &:last-child th': { border: 0 }, bgcolor: 'secondary.main'} 
                : { '&:last-child td, &:last-child th': { border: 0 } } 
            }
        >
            <TableCell component="th" scope="row" sx={ i == 2 && { color: 'white' } }>Antenatal</TableCell>
            <TableCell sx={ i == 2 && { color: 'white' }}>Dear Susu</TableCell>
            <TableCell sx={ i == 2 && { color: 'white' }}>06/10/2024</TableCell>
            <TableCell sx={ i == 2 && { color: 'white' }}>10:12 am</TableCell>
        </TableRow>)
    }
    return (
        <div>
            <Title text={"Good morning, Grace"} />
            <TableContainer component={Paper} sx={{p: 3, borderRadius: 3}}>
                <Typography fontSize={'1.2rem'} fontWeight={'medium'} color={'primary'}>Doctors Appointments</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color: 'primary.main', fontWeight: 'light'}}>Type</TableCell>
                            <TableCell sx={{color: 'primary.main', fontWeight: 'light'}}>Hospital Name</TableCell>
                            <TableCell sx={{color: 'primary.main', fontWeight: 'light'}}>Appointment Date</TableCell>
                            <TableCell sx={{color: 'primary.main', fontWeight: 'light'}}>Appointment Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Appointments