import React, { useState } from 'react'
import Title from '../components/Title'
import { Box, Button, IconButton, InputBase, Paper, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tabs, Typography } from '@mui/material'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddAppointment from '../components/modals/AddAppointment'
import CancelAppointment from '../components/modals/CancelAppointment'
import RescheduleAppointment from '../components/modals/RescheduleAppointment'


function Appointments() {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [value, setValue] = useState(0)
    const [appOpen, setAppOpen] = useState(false)
    const handleAppOpen = () => setAppOpen(true)
    const handleAppClose = () => setAppOpen(false)
    const [openCancel, setOpenCancel] = useState(false)
    const handleOpenCancel = () => setOpenCancel(true)
    const handleCloseCancel = () => setOpenCancel(false)
    const [openRes, setOpenRes] = useState(false)
    const handleOpenRes = () => setOpenRes(true)
    const handleCloseRes = () => setOpenRes(false)

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

    const rows = []
    for (let i = 0; i < 25; i++) {
        rows.push(<TableRow
            key={i}
            sx={{ bgcolor: '#f7faff', borderRadius: 3 }}
        >
            <TableCell sx={{ borderBottom: 'white 6px solid' }} >Parental Checkup</TableCell>
            <TableCell sx={{ borderBottom: 'white 6px solid' }}>06/10/2024</TableCell>
            <TableCell sx={{ borderBottom: 'white 6px solid' }}>10:00 am</TableCell>
            <TableCell sx={{ borderBottom: 'white 6px solid' }}>Elizabeth Polson</TableCell>
            <TableCell sx={{ borderBottom: 'white 6px solid' }}>City Hospital, Room 305</TableCell>
            <TableCell sx={{ display: 'flex', alignItems: 'center', borderBottom: 'white 6px solid' }} >
                <Typography mr={2} color={'primary'} sx={{ cursor: 'pointer', ":hover": { textDecoration: 'underline' } }} onClick={handleOpenRes}>
                    Reschedule
                </Typography>
                <IconButton onClick={handleOpenCancel} >
                    <DisabledByDefaultRoundedIcon sx={{ color: 'secondary.main' }} />
                </IconButton>
            </TableCell>
        </TableRow>)
    }

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
        <div>
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
                            />
                        </Paper>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Filter by Date" slotProps={{ textField: { size: 'small' } }} />
                            </DemoContainer>
                        </LocalizationProvider>
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
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (row))}
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
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (row))}
                                </TableBody>
                            </Table>
                        </Box>
                    </CustomTabPanel>
                </Box>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            <AddAppointment handleClose={handleAppClose} open={appOpen} />
            <RescheduleAppointment handleClose={handleCloseRes} open={openRes} />
            <CancelAppointment handleClose={handleCloseCancel} open={openCancel} />
        </div>
    )
}

export default Appointments