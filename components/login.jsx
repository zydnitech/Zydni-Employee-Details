import React, { useState } from 'react'
import { Box, Button, Card, FormControl, InputAdornment, TextField } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useForm } from "react-hook-form";
import Image from 'next/image';
import Head from 'next/head';

export default function Login({ data }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [rmemberdata, setrmemberdata] = useState([]);
    const onSubmit = (d) => {
        setrmemberdata(d);
        data(d)
    };
    
    return (
        <div className='container loginbox'>
            <Head>
                <title>Login Page</title>
            </Head>
            <Box className="logincard">
                <Card className='form-s-card'>
                    <Image src="/zydni_logo.png" alt='Company Logo' width={200} height={100} />
                    {/* <img src="../images/zydni_logo.svg" alt="" /> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                            <TextField size='large' InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }} className='m-2 ' label="Enter Your Username" variant="standard" type='text' name="username"
                                {...register("username", {
                                    required: "Please enter your Username",
                                })} />
                            {errors.username && (
                                <p className="errormsg">{errors.username.message}</p>
                            )}
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} className='m-2 ' label="Enter Your Password" variant="standard" type={"password"} name="password"
                                {...register("password", {
                                    required: "Please enter your Password",
                                })}
                            />
                            {errors.password && (
                                <p className="errormsg">{errors.password.message}</p>
                            )}
                            <Button type="submit" variant='contained' className='m-2 loginbtn' >Log In</Button>
                        </FormControl>
                    </form>
                </Card>
            </Box>
        </div>
    )
}
