import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, Stack, TableCell, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import Title from '../components/Title'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import AddHealthRecord from '../components/modals/AddHealthRecord'
import EditHealthRecord from '../components/modals/EditHealthRecord'
import DeleteHealthRecord from '../components/modals/DeleteHealthRecord'


function HealthRecords() {

    const [recordOpen, setRecordOpen] = useState(false)
    const handleRecordOpen = () => setRecordOpen(true)
    const handleRecordClose = () => setRecordOpen(false)
    const [editOpen, setEditOpen] = useState(false)
    const handleEditOpen = () => setEditOpen(true)
    const handleEditClose = () => setEditOpen(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const handleDeleteOpen = () => setDeleteOpen(true)
    const handleDeleteClose = () => setDeleteOpen(false)

    return (
        <div>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                <Title text={'Health Records'} />
                <Button variant='contained' onClick={handleRecordOpen} sx={{ px: 8, textTransform: 'capitalize' }} > Add Record </Button>
            </Box>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography>Diagnosis 001 (Baby Scan)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={'row'} justifyContent={'space-evenly'} spacing={3} alignItems={'center'} >
                        <Box sx={{ backgroundImage: `url(${user})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} height={'60vh'} width={'100%'} borderRadius={3} />
                        <Box bgcolor={'white'} width={'100%'}>
                            <Typography color={'white'} sx={{ bgcolor: '#343A40', py: 1, px: 2 }}>Details</Typography>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', border: 0 }}>Health Record</TableCell>
                                </TableRow>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Record ID</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>HR-2024-001</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Date of Record</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>June 20, 2024</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Healthcare Provider</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Dr. Sarah Smith</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Type of Record</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Lab Results</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Diagnosis</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Gestational Diabetes</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Tests Conducted</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}> Blood glucose test, Ultrasound</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Results</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Blood glucose level: 130 mg/dL, Ultrasound: Normal fetal development</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Follow-Up Appointments</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Next visit on July 10, 2024</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Treatment Plan</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Follow a low-sugar diet, regular exercise, monitor blood glucose levels</TableCell>
                            </TableRow>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography>Diagnosis 001 (Baby Scan)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={'row'} justifyContent={'space-evenly'} spacing={3} alignItems={'center'} >
                        <Box sx={{ backgroundImage: `url(${user})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} height={'60vh'} width={'100%'} borderRadius={3} />
                        <Box bgcolor={'white'} width={'100%'}>
                            <Typography color={'white'} sx={{ bgcolor: '#343A40', py: 1, px: 2 }}>Details</Typography>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', border: 0 }}>Health Record</TableCell>
                                </TableRow>
                                <Box>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleEditOpen} >
                                        <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                    </IconButton>
                                    <IconButton sx={{ width: 40, height: 40 }} onClick={handleDeleteOpen} >
                                        <DeleteIcon sx={{ color: 'secondary.main' }} />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Record ID</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>HR-2024-001</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Date of Record</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>June 20, 2024</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Healthcare Provider</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Dr. Sarah Smith</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Type of Record</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Lab Results</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Diagnosis</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Gestational Diabetes</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Tests Conducted</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}> Blood glucose test, Ultrasound</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Results</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Blood glucose level: 130 mg/dL, Ultrasound: Normal fetal development</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Follow-Up Appointments</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Next visit on July 10, 2024</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Treatment Plan</TableCell>
                                <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>Follow a low-sugar diet, regular exercise, monitor blood glucose levels</TableCell>
                            </TableRow>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <AddHealthRecord handleClose={handleRecordClose} open={recordOpen} />
            <EditHealthRecord handleClose={handleEditClose} open={editOpen} />
            <DeleteHealthRecord handleClose={handleDeleteClose} open={deleteOpen} />
        </div>
    )
}

export default HealthRecords