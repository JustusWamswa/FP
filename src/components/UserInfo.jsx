import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'


function UserInfo() {
    return (
        <TableContainer component={Paper} sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant='h6' fontWeight={'bold'}>Users Information</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>User Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Location</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Date Registered</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>DOB</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Current Health Status</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Account Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Anabel Cynthia</TableCell>
                        <TableCell>South Nigeria</TableCell>
                        <TableCell>12.09.2024 - 12.53 PM</TableCell>
                        <TableCell>27/12/2024</TableCell>
                        <TableCell>Pregnant</TableCell>
                        <TableCell>
                            <Typography bgcolor={'#00B69B'} color={'white'} width={'50%'} textAlign={'center'} p={1} borderRadius={5}>
                                Active
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anabel Cynthia</TableCell>
                        <TableCell>South Nigeria</TableCell>
                        <TableCell>12.09.2024 - 12.53 PM</TableCell>
                        <TableCell>27/12/2024</TableCell>
                        <TableCell>Pregnant</TableCell>
                        <TableCell>
                            <Typography bgcolor={'#FCBE2D'} color={'white'} width={'50%'} textAlign={'center'} p={1} borderRadius={5}>
                                Not Active
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anabel Cynthia</TableCell>
                        <TableCell>South Nigeria</TableCell>
                        <TableCell>12.09.2024 - 12.53 PM</TableCell>
                        <TableCell>27/12/2024</TableCell>
                        <TableCell>Pregnant</TableCell>
                        <TableCell>
                            <Typography bgcolor={'#00B69B'} color={'white'} width={'50%'} textAlign={'center'} p={1} borderRadius={5}>
                                Active
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anabel Cynthia</TableCell>
                        <TableCell>South Nigeria</TableCell>
                        <TableCell>12.09.2024 - 12.53 PM</TableCell>
                        <TableCell>27/12/2024</TableCell>
                        <TableCell>Pregnant</TableCell>
                        <TableCell>
                            <Typography bgcolor={'#FCBE2D'} color={'white'} width={'50%'} textAlign={'center'} p={1} borderRadius={5}>
                                Not Active
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anabel Cynthia</TableCell>
                        <TableCell>South Nigeria</TableCell>
                        <TableCell>12.09.2024 - 12.53 PM</TableCell>
                        <TableCell>27/12/2024</TableCell>
                        <TableCell>Pregnant</TableCell>
                        <TableCell>
                            <Typography bgcolor={'#00B69B'} color={'white'} width={'50%'} textAlign={'center'} p={1} borderRadius={5}>
                                Active
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserInfo