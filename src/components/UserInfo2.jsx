import React, { useState } from 'react'
import { Box, Button, Divider, IconButton, InputBase, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import AddUser from './modals/AddUser'
import SearchIcon from '@mui/icons-material/Search'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import EditUser from './modals/EditUser'
import DeleteUser from './modals/DeleteUser'



function UserInfo2() {

    const [addOpen, setAddOpen] = useState(false)
    const handleAddOpen = () => setAddOpen(true)
    const handleAddClose = () => setAddOpen(false)
    const [editOpen, setEditOpen] = useState(false)
    const handleEditOpen = () => setEditOpen(true)
    const handleEditClose = () => setEditOpen(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const handleDeleteOpen = () => setDeleteOpen(true)
    const handleDeleteClose = () => setDeleteOpen(false)

    return (
        <>
            <TableContainer component={Paper} sx={{ p: 3, borderRadius: 3 }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h5' color={'secondary.main'}>Users Information</Typography>
                    <Button variant='contained' onClick={handleAddOpen} sx={{ px: 8, textTransform: 'capitalize' }} > Add User </Button>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Stack direction={'row'} mb={2} alignItems={'center'}>
                    <Paper
                        component="form"
                        sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 200, borderRadius: 10, boxShadow: 'none', bgcolor: 'bglight.main', mr: 2 }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Paper>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Filter by Date" slotProps={{ textField: { size: 'small' } }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Stack>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>User Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Email Address</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Date of Birth</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Current Health Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Date Added</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', color: 'gray' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Anabel Cynthia</TableCell>
                            <TableCell>cynthia@gmail.com</TableCell>
                            <TableCell>+91 12345 67890</TableCell>
                            <TableCell>27/12/2024</TableCell>
                            <TableCell>Pregnant</TableCell>
                            <TableCell>06/10/2024</TableCell>
                            <TableCell>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <AddUser handleClose={handleAddClose} open={addOpen} />
            <EditUser handleClose={handleEditClose} open={editOpen} />
            <DeleteUser handleClose={handleDeleteClose} open={deleteOpen} />
        </>
    )
}

export default UserInfo2