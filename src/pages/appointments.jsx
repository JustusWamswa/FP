import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Alert, Box, Button, IconButton, InputBase, LinearProgress, Paper, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, TextField, Typography } from '@mui/material'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddAppointment from '../components/modals/AddAppointment'
import CancelAppointment from '../components/modals/CancelAppointment'
import RescheduleAppointment from '../components/modals/RescheduleAppointment'
import { createAppointment, deleteAppointment, getAppointments, updateAppointment } from '../services/api'

export function formatDate(isoString) {
    const date = new Date(isoString)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-indexed
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

function Appointments() {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [value, setValue] = useState(0)
    const [appOpen, setAppOpen] = useState(false)
    const handleAppOpen = () => {
        setAppOpen(true)
        setAppointmentDetails([])
    }
    const handleAppClose = () => setAppOpen(false)
    const [openCancel, setOpenCancel] = useState(false)
    const handleOpenCancel = (row) => {
        setOpenCancel(true)
        setAppointmentDetails(row)
    }
    const handleCloseCancel = () => setOpenCancel(false)
    const [openRes, setOpenRes] = useState(false)
    const handleOpenRes = (row) => {
        setOpenRes(true)
        setAppointmentDetails(row)
    }
    const handleCloseRes = () => setOpenRes(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filterDate, setFilterDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [fail, setFail] = useState(false)
    const [success, setSuccess] = useState(false)
    const [appointments, setAppointments] = useState([])
    const [appointmentDetails, setAppointmentDetails] = useState(
        {
            appointmentTitle: "",
            date: "",
            time: "",
            location: "",
            healthcareProvider: "",
            appointmentType: "",
            note: ""
        }
    )
    const fetchAppointments = () => {
        setLoading(true)
        getAppointments()
            .then((res) => {
                setAppointments(res.data)
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
        fetchAppointments()
    }, [])

    const addAppointment = (appointmentDetails) => {
        setLoading(true)
        createAppointment(appointmentDetails)
            .then((res) => {
                setLoading(false)
                handleAppClose()
                fetchAppointments()
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
    const modifyAppointment = (appointmentDetails) => {
        const id = appointmentDetails?._id
        delete appointmentDetails?._id
        delete appointmentDetails?.__v
        delete appointmentDetails?.userId
        setLoading(true)
        updateAppointment(id, appointmentDetails)
            .then((res) => {
                setLoading(false)
                handleCloseRes()
                fetchAppointments()
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

    const cancelAppointment = () => {
        setLoading(true)
        deleteAppointment(appointmentDetails?._id)
            .then((res) => {
                setLoading(false)
                handleCloseCancel()
                fetchAppointments()
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
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleDateFilterChange = (event) => {
        setFilterDate(event.target.value)
    }

    const filteredAppointments = appointments.filter((appointment) => {
        const matchesSearchQuery = appointment?.appointmentTitle.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesDateFilter = filterDate ? formatDate(appointment?.date) === formatDate(filterDate) : true
        return matchesSearchQuery && matchesDateFilter
    })

    // const rows = []
    // for (let i = 0; i < 25; i++) {
    //     rows.push(<TableRow
    //         key={i}
    //         sx={{ bgcolor: '#f7faff', borderRadius: 3 }}
    //     >
    //         <TableCell sx={{ borderBottom: 'white 6px solid' }} >Parental Checkup</TableCell>
    //         <TableCell sx={{ borderBottom: 'white 6px solid' }}>06/10/2024</TableCell>
    //         <TableCell sx={{ borderBottom: 'white 6px solid' }}>10:00 am</TableCell>
    //         <TableCell sx={{ borderBottom: 'white 6px solid' }}>Elizabeth Polson</TableCell>
    //         <TableCell sx={{ borderBottom: 'white 6px solid' }}>City Hospital, Room 305</TableCell>
    //         <TableCell sx={{ display: 'flex', alignItems: 'center', borderBottom: 'white 6px solid' }} >
    //             <Typography mr={2} color={'primary'} sx={{ cursor: 'pointer', ":hover": { textDecoration: 'underline' } }} onClick={handleOpenRes}>
    //                 Reschedule
    //             </Typography>
    //             <IconButton onClick={handleOpenCancel} >
    //                 <DisabledByDefaultRoundedIcon sx={{ color: 'secondary.main' }} />
    //             </IconButton>
    //         </TableCell>
    //     </TableRow>)
    // }

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        )
    }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    return (
        <>
            {loading && <LinearProgress />}
            {fail ? <Alert severity="error" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Failed</Alert>
                : success ? <Alert severity="success" sx={{ position: 'absolute', right: 0, bottom: 10, zIndex: 50, minWidth: "20%" }}>Success</Alert>
                    : <></>}
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={3}>
                <Title text={'Appointments'} />
                <Button variant='contained' onClick={handleAppOpen} sx={{ px: 8, textTransform: 'capitalize' }} > Add Appointment </Button>
            </Box>
            <TableContainer component={Paper} sx={{ p: 3, borderRadius: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{ textTransform: 'capitalize' }} label="New Appointments" {...a11yProps(0)} />
                            <Tab sx={{ textTransform: 'capitalize' }} label="Completed Appointments" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <Stack direction={'row'} mt={2} alignItems={'center'}>
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
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </Paper>
                        <TextField id="outlined-basic" label="" variant="outlined" size='small' placeholder='Filter by date' type='date'
                            value={filterDate}
                            onChange={handleDateFilterChange}
                        />
                    </Stack>
                    <CustomTabPanel value={value} index={0}>
                        <Box sx={{ maxHeight: '60vh', overflowY: 'scroll' }} >
                            <Table stickyHeader sx={{ minWidth: 650, maxHeight: '75vh', overflowY: 'scroll' }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Appointment Title</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Date</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Time</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Healthcare Provider</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Location</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>User Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredAppointments
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <TableRow
                                                key={row?._id}
                                                sx={{ bgcolor: '#f7faff', borderRadius: 3 }}
                                            >
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }} >{row?.appointmentTitle}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{formatDate(row?.date)}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.time}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.healthcareProvider}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.location}</TableCell>
                                                <TableCell sx={{ display: 'flex', alignItems: 'center', borderBottom: 'white 6px solid' }} >
                                                    <Typography mr={2} color={'primary'} sx={{ cursor: 'pointer', ":hover": { textDecoration: 'underline' } }} onClick={() => handleOpenRes(row)}>
                                                        Reschedule
                                                    </Typography>
                                                    <IconButton onClick={() => handleOpenCancel(row)} >
                                                        <DisabledByDefaultRoundedIcon sx={{ color: 'secondary.main' }} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Box sx={{ maxHeight: '60vh', overflowY: 'scroll' }} >
                            <Table stickyHeader sx={{ minWidth: 650, maxHeight: '75vh', overflowY: 'scroll' }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Appointment Title</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Date</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Time</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Healthcare Provider</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>Location</TableCell>
                                        <TableCell sx={{ color: 'primary.main', fontWeight: 'light' }}>User Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (row))} */}
                                    {filteredAppointments
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <TableRow
                                                key={row?._id}
                                                sx={{ bgcolor: '#f7faff', borderRadius: 3 }}
                                            >
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }} >{row?.appointmentTitle}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{formatDate(row?.date)}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.time}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.healthcareProvider}</TableCell>
                                                <TableCell sx={{ borderBottom: 'white 6px solid' }}>{row?.location}</TableCell>
                                                <TableCell sx={{ display: 'flex', alignItems: 'center', borderBottom: 'white 6px solid' }} >
                                                    <Typography mr={2} color={'primary'} sx={{ cursor: 'pointer', ":hover": { textDecoration: 'underline' } }} onClick={() => handleOpenRes(row)}>
                                                        Reschedule
                                                    </Typography>
                                                    <IconButton onClick={() => handleOpenCancel(row)} >
                                                        <DisabledByDefaultRoundedIcon sx={{ color: 'secondary.main' }} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </CustomTabPanel>
                </Box>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 25, 50, 100]}
                    component="div"
                    count={appointments.length}
                    // count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <AddAppointment handleClose={handleAppClose} open={appOpen} setAppointmentDetails={setAppointmentDetails} appointmentDetails={appointmentDetails} addAppointment={addAppointment} />
            <RescheduleAppointment handleClose={handleCloseRes} open={openRes} setAppointmentDetails={setAppointmentDetails} appointmentDetails={appointmentDetails} modifyAppointment={modifyAppointment} />
            <CancelAppointment handleClose={handleCloseCancel} open={openCancel} cancelAppointment={cancelAppointment} />
        </>
    )
}

export default Appointments