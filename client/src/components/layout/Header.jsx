import {
    Add as AddIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Search as SearchIcon
} from '@mui/icons-material'
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { orange } from '../../constants/color'
const SearchDialog = lazy(() => import('../specific/Search'))
const NotificationDialog = lazy(() => import('../specific/Notifications'))
const NewGroupDialog = lazy(() => import('../specific/NewGroup'))
const Header = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const handlerMobile = () => {
        setIsMobile((prev) => !prev)
    }
    const openSearchDialog = () => {
        setIsSearch((prev) => !prev)
    }
    const openNewGroup = () => {
        setIsNewGroup((prev) => !prev)
    }
    const openNotification = () => {
        setIsNotification((prev) => !prev)
    }
    const navigateToGroup = () => navigate("/groups")
    const logoutHandler = () => {
        console.log("Logout")
    }
    
    return (
        <>
        <Box
            sx={{
                flexGrow: 1,
            }}
            height={"4rem"}
        >

            <AppBar position='static' sx={{
                bgcolor: orange
            }} >
                <Toolbar>
                    <Typography variant='h6'
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}
                    >
                        Chating App
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: "block",
                                sm: "none"
                            },
                        }}
                    >
                        <IconButton color='inherit' onClick={handlerMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconBtn icon={<SearchIcon />} title="Search" onClick={openSearchDialog} />
                        <IconBtn icon={<AddIcon />} title="New Group" onClick={openNewGroup} />
                        <IconBtn icon={<GroupIcon />} title="Groups" onClick={navigateToGroup} />
                        <IconBtn icon={<NotificationsIcon/>} title="Notifications" onClick={openNotification} />
                        <IconBtn icon={<LogoutIcon/>} title="Logout" onClick={logoutHandler} />
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
        {
            isSearch && (
                <Suspense fallback={<Backdrop open/>}>
                    <SearchDialog />
                </Suspense>
            )
        }
        {
            isNewGroup && (
                <Suspense fallback={<Backdrop open/>}>
                    <NewGroupDialog />
                </Suspense>
            )
        }
        {
            isNotification && (
                <Suspense fallback={<Backdrop open/>}>
                    <NotificationDialog />
                </Suspense>
            )
        }
    </>
    )
}
const IconBtn = ({ icon, title, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
export default Header