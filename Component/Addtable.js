import React, { useState } from 'react'
import { Button, Grid, Stack, styled, TextField, } from '@mui/material';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ThumbUp } from '@mui/icons-material';
import { TextFields ,Buttons } from '../styles/muistyle';

export default function Addtable() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (d) => {
        axios.post(`http://192.168.0.10 :8030/api/resumeapi`, d).then((res) => {
            setopenmodal('modal')
            console.log('working', res);
        }).catch((e) => {
            console.log('ERROR OCCURED', e);
        })
    }
    // submit modal
    const [openmodal, setopenmodal] = useState('')

    return (
        <Box>
            <Button variant="contained" data-bs-toggle="modal" data-bs-target="#exampleModal" sx={{
                width: 'fit-content !important', marginTop: "14px"
            }} className="addempbtn">Add Employee</Button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title addnewem" id="exampleModalLabel">Add New Employee</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Box>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={3}>
                                        <Grid container>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="First Name"
                                                    variant="outlined" {...register("FirstName", {
                                                        required: " Enter your firstname",
                                                    })} />
                                                {errors.FirstName && (
                                                    <p className="errormsg">{errors.FirstName.message}</p>
                                                )}
                                            </Grid>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Last Name"
                                                    variant="outlined" {...register("LastName", {
                                                        required: " Enter your Last Name",
                                                    })} />
                                                {errors.LastName && (
                                                    <p className="errormsg">{errors.LastName.message}</p>
                                                )}
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Email" type={"email"}
                                                    variant="outlined" {...register("Email", {
                                                        required: " Enter your E-Mail",
                                                    })} />
                                                {errors.Email && (
                                                    <p className="errormsg">{errors.Email.message}</p>
                                                )}
                                            </Grid>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Contact Number"
                                                    type={"number"} variant="outlined" {...register("ContactNo", {
                                                        required: " Enter your Contact Number",
                                                    })} />{errors.ContactNo && (
                                                        <p className="errormsg">{errors.ContactNo.message}</p>
                                                    )}
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Qualification"
                                                    variant="outlined" {...register("Qualification", {
                                                        required: " Enter your Qualification",
                                                    })} />
                                                {errors.Qualification && (
                                                    <p className="errormsg">{errors.Qualification.message}</p>
                                                )}
                                            </Grid>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Skillset"
                                                    variant="outlined" {...register("SkillSet", {
                                                        required: " Enter your Skillsets",
                                                    })} />
                                                {errors.SkillSet && (
                                                    <p className="errormsg">{errors.SkillSet.message}</p>
                                                )}
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <Stack spacing={3}>
                                                    <Grid item lg={12} md={12} sm={12}>

                                                        <label htmlFor="">Are You Experienced</label><br />
                                                        <input {...register("Experience", {
                                                            required: "Please upload your resume"
                                                        })} type="radio"
                                                            value="Yes" />
                                                        <input {...register("Experience", {
                                                            required: "Please upload your resume"
                                                        })} type="radio" value="No" />

                                                        {errors.Experience && (
                                                            <p className="errormsg">{errors.Experience.message}</p>
                                                        )}
                                                    </Grid>
                                                    <Grid item lg={12} md={12} sm={12}>
                                                        <label htmlFor="">Where You Found Us</label><br />
                                                        <select name="" id="selection" {...register('Reference', {
                                                            required: "Please upload your resume"
                                                        })}>
                                                            <option value="">Select An Option</option>
                                                            <option value="Instagram">
                                                                Instagram
                                                            </option>
                                                            <option value="Facebook">
                                                                Facebook
                                                            </option>
                                                            <option value="Linkedin">
                                                                Linkedin
                                                            </option>
                                                            <option value="Whatsapp">
                                                                Whatsapp
                                                            </option>
                                                            <option value="From Others">
                                                                From Others
                                                            </option>
                                                        </select>
                                                        {errors.Reference && (
                                                            <p className="errormsg">{errors.Reference.message}</p>
                                                        )}
                                                    </Grid>
                                                    <Grid item lg={12} md={12} sm={12}>
                                                        {/*
                                                <TextFields fullWidth sx={{ margin: '0px 5px' }}
                                                    label="Upload Your Resume" type="file" variant="outlined"
                                                    InputLabelProps={{ shrink: true }} {...register("resume1", {
                                                    required: "Please upload your resume" , })} /> */}
                                                        <Buttons variant="outlined" component="label" fullWidth>
                                                            Upload Your Resume
                                                            <input type="file" hidden {...register("resume1", {
                                                                required: "Please upload your resume",
                                                            })} />
                                                        </Buttons>
                                                        {errors.resume1 && (
                                                            <p className="errormsg">{errors.resume1.message}</p>
                                                        )}
                                                    </Grid>
                                                </Stack>
                                            </Grid>
                                            <Grid item xl={6} lg={12} md={12} sm={12}>
                                                <Grid item lg={12}>
                                                    <TextFields fullWidth sx={{ margin: '0px 5px' }}
                                                        id="outlined-multiline-static" label="Comments" multiline rows={9}
                                                        variant="outlined" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Button sx={{ margin: "auto !important", width: '100px !important' }}
                                            className="mt-3 subbtn"
                                            type="submit" variant="contained">Submit</Button>
                                             {/* data-bs-toggle={openmodal} data-bs-target="#exampleModal"
                                        <div className="modal fade" id="exampleModal" tabIndex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">

                                                        <p className="modal-title" id="exampleModalLabel"> </p>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body row">
                                                        <div className="col-3">
                                                            <ThumbUp sx={{ marginLeft: '20px', fontSize: '75px' }} />
                                                        </div>
                                                        <div className="col-9">Employee data is submitted
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </Stack>
                                </form>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}