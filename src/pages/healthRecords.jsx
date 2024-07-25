import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, IconButton, LinearProgress, Stack, TableCell, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'
import DeleteIcon from '@mui/icons-material/Delete'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import AddHealthRecord from '../components/modals/AddHealthRecord'
import EditHealthRecord from '../components/modals/EditHealthRecord'
import DeleteHealthRecord from '../components/modals/DeleteHealthRecord'
import { createRecord, deleteRecord, getRecords, updateRecord } from '../services/api'
import { formatDate } from './appointments'
import axios from 'axios'
const url = import.meta.env.VITE_API_URL
const token = import.meta.env.VITE_AUTH_TOKEN

function HealthRecords() {

    const [recordOpen, setRecordOpen] = useState(false)
    const handleRecordOpen = () => {
        setRecordOpen(true)
        setRecordDetails([])
    }
    const handleRecordClose = () => setRecordOpen(false)
    const [editOpen, setEditOpen] = useState(false)
    const handleEditOpen = (record) => {
        setEditOpen(true)
        setRecordDetails(record)
    }
    const handleEditClose = () => setEditOpen(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    const handleDeleteOpen = (record) => {
        setDeleteOpen(true)
        setRecordDetails(record)
    }
    const handleDeleteClose = () => setDeleteOpen(false)
    const [loading, setLoading] = useState(false)
    const [fail, setFail] = useState(false)
    const [success, setSuccess] = useState(false)
    const [records, setRecords] = useState([])
    const [recordDetails, setRecordDetails] = useState(
        {
            date: "",
            diagnosis: "",
            healthcareProvider: "",
            results: "",
            testsConducted: "",
            treatmentPlan: "",
            type: ""
        }
    )
    console.log(recordDetails)
    const [file, setFile] = useState()

    const fetchRecords = () => {
        setLoading(true)
        getRecords()
            .then((res) => {
                setRecords(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setFail(true)
                setTimeout(() => {
                    setFail(false)
                }, 5000)
            })
    }

    useEffect(() => {
        fetchRecords()
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setRecordDetails({
            ...recordDetails,
            [name]: value,
        })
    }

    const handleFileChange = (e) => {
        const { name, files } = e.target
        setFile(files[0])
        setRecordDetails({
            ...recordDetails,
            [name]: files[0]['name'],
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('date', recordDetails.date)
        formData.append('diagnosis', recordDetails.diagnosis)
        formData.append('healthcareProvider', recordDetails.healthcareProvider)
        formData.append('recordFile', file)
        formData.append('results', recordDetails.results)
        formData.append('testsConducted', recordDetails.testsConducted)
        formData.append('treatmentPlan', recordDetails.treatmentPlan)
        formData.append('type', recordDetails.type)

        createRecord(formData)
            .then((res) => {
                handleRecordClose()
                fetchRecords()
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000)
            })
            .catch((error) => {
                console.error('Error uploading file', error)
                setFail(true)
                setTimeout(() => {
                    setFail(false)
                }, 5000)
            })
    }

    const modifyRecord = (recordDetails) => {
        const id = recordDetails?._id
        delete recordDetails?._id
        delete recordDetails?.__v
        delete recordDetails?.userId
        delete recordDetails?.recordFileUrl
        setLoading(true)
        updateRecord(id, recordDetails)
            .then((res) => {
                setLoading(false)
                handleEditClose()
                fetchRecords()
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setFail(true)
                setTimeout(() => {
                    setFail(false)
                }, 5000)
            })
    }

    const clearRecord = () => {
        setLoading(true)
        console.log(recordDetails?._id)
        deleteRecord(recordDetails?._id)
            .then((res) => {
                setLoading(false)
                handleDeleteClose()
                fetchRecords()
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 5000)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setFail(true)
                setTimeout(() => {
                    setFail(false)
                }, 5000)
            })
    }

    return (
        <div>
            {loading && <LinearProgress />}
            {fail ? <Alert severity="error" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Failed</Alert>
                : success ? <Alert severity="success" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Success</Alert>
                    : <></>}
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                <Title text={'Health Records'} />
                <Button variant='contained' onClick={handleRecordOpen} sx={{ px: 8, textTransform: 'capitalize' }} > Add Record </Button>
            </Box>
            {records.map((record, index) => (
                <Accordion defaultExpanded={index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                        <Typography>Diagnosis 00{index+1} ({record?.type.trim()})</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction={'row'} justifyContent={'space-evenly'} spacing={3} alignItems={'center'} >
                            <Box sx={{ backgroundImage: `url(${record?.recordFileUrl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} height={'60vh'} width={'100%'} borderRadius={3} />
                            <Box bgcolor={'white'} width={'100%'}>
                                <Typography color={'white'} sx={{ bgcolor: '#343A40', py: 1, px: 2 }}>Details</Typography>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <TableRow >
                                        <TableCell sx={{ color: 'black', border: 0 }}>Health Record</TableCell>
                                    </TableRow>
                                    <Box>
                                        <IconButton sx={{ width: 40, height: 40 }} onClick={() => handleEditOpen(record)} >
                                            <DriveFileRenameOutlineIcon sx={{ color: 'primary.main' }} />
                                        </IconButton>
                                        <IconButton sx={{ width: 40, height: 40 }} onClick={() => handleDeleteOpen(record)} >
                                            <DeleteIcon sx={{ color: 'secondary.main' }} />
                                        </IconButton>
                                    </Box>
                                </Stack>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Record ID</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?._id}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Date of Record</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{formatDate(record?.date)}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Healthcare Provider</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?.healthcareProvider}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Type of Record</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?.type}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Diagnosis</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?.diagnosis}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Tests Conducted</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}> {record?.testsConducted}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Results</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?.results}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Follow-Up Appointments</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{formatDate(record?.date)}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{ color: 'black', fontWeight: 'bold', border: 0 }}>Treatment Plan</TableCell>
                                    <TableCell sx={{ color: 'gray', fontWeight: 'light', border: 0 }}>{record?.treatmentPlan}</TableCell>
                                </TableRow>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
            <AddHealthRecord handleClose={handleRecordClose} open={recordOpen}
                handleChange={handleChange} handleFileChange={handleFileChange}
                handleSubmit={handleSubmit} recordDetails={recordDetails} file={file} />
            <EditHealthRecord handleClose={handleEditClose} open={editOpen} setRecordDetails={setRecordDetails} recordDetails={recordDetails} modifyRecord={modifyRecord} />
            <DeleteHealthRecord handleClose={handleDeleteClose} open={deleteOpen} clearRecord={clearRecord} />
        </div>
    )
}

export default HealthRecords