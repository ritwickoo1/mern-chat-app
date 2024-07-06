import { useFileHandler, useInputValidation } from '6pp'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyleComponents'
import { userNameValidator } from '../utils/validators'
const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }
    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("", userNameValidator)
    const password = useInputValidation("")
    const avatar = useFileHandler("single")
    const handleLogin = (e)=>{
        e.preventDefault();
    }
    const handleSignUp = (e)=>{
        e.preventDefault();
    }
    return (
        <div 
            style={{
                backgroundImage:
                "linear-gradient(rgba(200,200,200,0.5),rgba(120,110,220,0.5)",
            }}
        >
        <Container
            component={"main"}
            maxWidth="xs"
            sx={{
                height: "120vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}

            >
                {isLogin ? (
                    <>
                        <Typography variant={"h5"}>Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: "1rem",
                        }}
                        onSubmit={handleLogin}
                        >
                            <TextField
                                required
                                fullWidth
                                label={"Username"}
                                margin={"normal"}
                                variant={"outlined"}
                                value={username.value}
                                onChange={username.changeHandler}
                            />
                            <TextField
                                required
                                fullWidth
                                label={"Password"}
                                margin={"normal"}
                                variant={"outlined"}
                                type={"password"}
                                value={password.value}
                                onChange={password.changeHandler}
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >
                                Login
                            </Button>
                            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                            <Button
                                fullWidth
                                variant='text'
                                onClick={toggleLogin}
                            >
                                Sigin Up Instead
                            </Button>
                        </form>
                    </>
                ) :

                    (
                        <>
                            <Typography variant={"h5"}>Sign Up</Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                            onSubmit={handleSignUp}
                            >
                                <Stack
                                    position={"relative"}
                                    width={"10rem"}
                                    margin={"auto"}
                                >
                                    <Avatar
                                        sx={{
                                            width: "10rem",
                                            height: "10rem",
                                            objectFit: "contain"
                                        }}
                                        src={avatar.preview}
                                    />
                                    {
                                        avatar.error && (
                                            <Typography 
                                            m={"1rem"}
                                            display={"block"}
                                            width={"fit-content"}
                                            color={"error"} 
                                            variant='caption'>
                                                {avatar.error}
                                            </Typography>
                                        )
                                    }
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            right: 0,
                                            bottom: 0,
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0,0.7)",
                                            },

                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                <TextField
                                    required
                                    fullWidth
                                    label={"Name"}
                                    margin={"normal"}
                                    variant={"outlined"}
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label={"Bio"}
                                    margin={"normal"}
                                    variant={"outlined"}
                                    type={"text"}
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label={"Username"}
                                    margin={"normal"}
                                    variant={"outlined"}
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />

                                {
                                    username.error && (
                                        <Typography color={"error"} variant='caption'>
                                            {username.error}
                                        </Typography>
                                    )
                                }

                                <TextField
                                    required
                                    fullWidth
                                    label={"Password"}
                                    margin={"normal"}
                                    variant={"outlined"}
                                    type={"password"}
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                {
                                    password.error && (
                                        <Typography color={"error"} variant='caption'>
                                            {password.error}
                                        </Typography>
                                    )
                                }
                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                    }}
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    Sign Up
                                </Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button
                                    fullWidth
                                    variant='text'
                                    onClick={toggleLogin}
                                >
                                    Login Instead
                                </Button>
                            </form>
                        </>
                    )
                }
            </Paper>
        </Container>
        </div>);
}

export default Login