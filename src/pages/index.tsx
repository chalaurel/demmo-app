import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, Toolbar } from "@mui/material"

import { AppBar } from "swoop-ui"
import { withAuthenticator } from "sharedlogin"
import { useSelector, useDispatch } from "react-redux";

import { resetCurrentUser } from "../store/user"
import fetchAllUsers from "../store/user"

import { logout } from "../lib/auth"

import useStyles from "./styles"
import Cards from "./components/cards"
import { fetchCurrentUser } from "src/action"

const test = [
    {
        email: "glenn.zaballero@gmail.com",
        firstname: "Glenn",
        lastname: "Zaballero",
        mode: "Observer",
        seen: 1643007456652,
        active: 1642119134258
    },
    {
        email: "charity@swoop.aero",
        firstname: "Charity",
        lastname: "Laurel",
        mode: "Observer",
        seen: 1643007456652,
        active: 1642119134258
    }
]

const MainLayout = () => {
    const css = useStyles()
    const dispatch = useDispatch()
    useSelector(state => {
        console.log('current user: ', state)
    })

    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        console.log("Initialising page...")
        fetchData()
        // eslint-disable-next-line
    }, [])

    const fetchData = async () => {
     await Promise.all([
         fetchCurrentUser(dispatch)
     ]).then(([r_user]) => {
         const _current_user = r_user
     })
    }
    

    const onMenuOpen = () => {
        open ? setOpen(false) : setOpen(true)
    }
    const onLogout = () => {
        dispatch(resetCurrentUser)
        // history.push("/");
        logout()
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={css.container}>
                <AppBar
                    position="fixed"
                    onClickMenu={onMenuOpen}
                    // user={currentUser}
                    onSignout={onLogout}
                />
                <Toolbar className={css.toolbarGutter} />
                <Box className={css.contentContainer}>
                    <Routes>
                        <Route path="/" element={<Cards data={test} />} />
                    </Routes>
                </Box>
            </div>
        </BrowserRouter>
    )
}

export default withAuthenticator(MainLayout)
