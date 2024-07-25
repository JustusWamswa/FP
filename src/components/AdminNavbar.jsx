import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import SearchBar from './SearchBar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import EventIcon from '@mui/icons-material/Event'
import HomeIcon from '@mui/icons-material/Home'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import DescriptionIcon from '@mui/icons-material/Description'
import WidgetsIcon from '@mui/icons-material/Widgets'
import SettingsIcon from '@mui/icons-material/Settings'
import { useLocation, useNavigate } from 'react-router-dom'
import { Avatar, Button, Modal, Stack, Typography } from '@mui/material'
import mama from '../assets/eternal-bond-mothers-day-logo-cherished-connection-iconic-mother-child_706143-58681.avif'
import user from '../assets/portrait-non-traditional-family-with-single-mother_23-2151295325.jpg'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Notifications from './modals/Notifications'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import { SignOutButton, UserButton } from '@clerk/clerk-react'

const drawerWidth = 240

function AdminNavbar({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [selected, setSelected] = useState('Dashboard')
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [nOpen, setNOpen] = useState(false)
    const handleNOpen = () => setNOpen(true)
    const handleNClose = () => setNOpen(false)

    const navigate = useNavigate()

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    }

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    }

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    }

    const handleSelected = (text) => {
        setSelected(text)
        navigate(`/admin/${text.toLowerCase().replace(' ', '')}`)
    }
    const handleLogout = () => {
        navigate('/')
    }

    const location = useLocation()
    const path = location.pathname
    const items = path.split('/')

    const menuItems = ['Dashboard', 'Users', 'Resources']

    useEffect(() => {
        for (let i = 0; i < menuItems.length; i++) {
            if (items.includes((menuItems[i]).replace(" ", "").toLowerCase())) {
                setSelected(menuItems[i])
                return
            }
        }
    }, [path])


    const icons = [
        <HomeIcon color='inherit' />, <GroupOutlinedIcon color='inherit' />, <WidgetsIcon color='inherit' />
    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5,
    }

    const drawer = (
        <div>
            <Toolbar sx={{ height: '10vh', pt: 10, pb: 3 }}>
                <Box display={'flex'}>
                    <Typography color={'primary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>Smart</Typography>
                    <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>MamaCare</Typography>
                </Box>
            </Toolbar>
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={() => handleSelected(text)}
                            sx={selected == text ? { backgroundColor: 'primary.main', color: 'white', ":hover": { backgroundColor: 'primary.dark' }, mx: 2 } : { mx: 2 }}>
                            <ListItemIcon sx={selected == text && { color: 'white' }}>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem key={'Settings'} disablePadding>
                    <ListItemButton
                        onClick={() => handleSelected('Settings')}
                        sx={selected == 'Settings' ? { backgroundColor: 'primary.main', color: 'white', ":hover": { backgroundColor: 'primary.dark' }, mx: 2 } : { mx: 2 }}>
                        <ListItemIcon>
                            <SettingsIcon sx={selected == 'Settings' && { color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Logout'} disablePadding>
                    <ListItemButton
                        onClick={handleOpen}
                        sx={{ color: 'secondary.main', mx: 2 }} >
                        <ListItemIcon>
                            <ExitToAppIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List>
            {/* <Box display={'flex'} justifyContent={'center'} width={'100%'} mt={5}>
                <Box
                    component="img"
                    sx={{ height: 150 }}
                    alt="Mama"
                    src={mama}
                />
            </Box> */}
        </div>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                }}
            >
                <Toolbar sx={{ height: '10vh' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <SearchBar />
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                            <Avatar sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }} onClick={() => navigate('/app/support')}>
                                <ContactSupportIcon sx={{ color: 'gray' }} />
                            </Avatar>
                            <Avatar sx={{ bgcolor: 'white', ":hover": { cursor: 'pointer' } }} onClick={handleNOpen}>
                                <NotificationsIcon sx={{ color: 'gray' }} />
                            </Avatar>
                            <UserButton appearance={{elements: {userButtonAvatarBox: {width: 40, height: 40 }}}} />
                            <Box>
                                <Typography color={'black'} fontWeight={'bold'}>Moni Roy</Typography>
                                <Typography color={'gray'}>Admin</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} >
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontSize={'1.2rem'} fontWeight={'bold'} color={'primary'}>
                            Logout
                        </Typography>
                        <IconButton
                            onClick={handleClose}
                        >
                            <CancelOutlinedIcon sx={{ color: 'secondary.main' }} />
                        </IconButton>
                    </Box>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Log out of this system
                    </Typography>
                    <Box display={'flex'} justifyContent={'end'} alignItems={'center'} mt={3}>
                        <Button variant='outlined' onClick={handleClose} sx={{ mr: 3, textTransform: 'capitalize' }} > Cancel </Button>
                        <SignOutButton signOutOptions={{redirectUrl: '/'}} >
                            <Button variant='contained' sx={{ textTransform: 'capitalize' }} > Confirm </Button>
                        </SignOutButton>
                    </Box>
                </Box>
            </Modal>
            <Notifications handleClose={handleNClose} open={nOpen} />
        </Box>
    )
}


export default AdminNavbar

