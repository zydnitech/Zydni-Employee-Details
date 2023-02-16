import React, { useState } from 'react'
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, Stack, styled, TextField, } from '@mui/material';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ThumbUp } from '@mui/icons-material';
import { TextFields, Buttons, Modal_Style } from '../styles/muistyle';
import { apiBaseUrl } from '@/config/config';

export default function Addtable() {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (d) => {
        var bodyFormData = new FormData();
        console.log(d);
        for (const [key, value] of Object.entries(d)) {
            if (key == 'resumeFile') {
                console.log(value);
                bodyFormData.append(key, value[0]);
            } else {
                bodyFormData.append(key, value);
            }
        }
        axios({
            method: "post",
            url: apiBaseUrl + `api/resumeapi`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((res) => {
                setOpen(true)
                console.log('YOUR DATA IS SUBMITTED', res);
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
                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" id="myForm" action="post">
                                    <Grid container spacing={2} className=" mt-1 mb-2 ">
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="First Name" variant="outlined" {...register("firstName", {
                                                required: " Enter your firstname",
                                            })} />
                                            {errors.firstName && (
                                                <p className="errormsg">{errors.firstName.message}</p>
                                            )}
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="Last Name" variant="outlined" {...register("lastName", {
                                                required: " Enter your Last Name",
                                            })} />
                                            {errors.lastName && (
                                                <p className="errormsg">{errors.lastName.message}</p>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} className=" mt-2 mb-2">
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="Email" type={"email"} variant="outlined" {...register("email", {
                                                required: " Enter your E-Mail",
                                            })} />
                                            {errors.email && (
                                                <p className="errormsg">{errors.email.message}</p>
                                            )}
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="Contact Number" type={"number"} variant="outlined"
                                                {...register("contactNo", { required: " Enter your Contact Number", })} />
                                            {errors.contactNo && (
                                                <p className="errormsg">{errors.contactNo.message}</p>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} className=" mt-2 mb-2">
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="Qualification" variant="outlined" {...register("qualification", {
                                                required: " Enter your qualification",
                                            })} />
                                            {errors.qualification && (
                                                <p className="errormsg">{errors.qualification.message}</p>
                                            )}
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth label="Skillset" variant="outlined" {...register("skillSet", {
                                                required: " Enter your Skillsets",
                                            })} />
                                            {errors.skillSet && (
                                                <p className="errormsg">{errors.skillSet.message}</p>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} className=" mt-2 mb-2">
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <Grid container spacing={2} className=" ">
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <FormControl>
                                                        <FormLabel id="demo-row-radio-buttons-group-label">Are You Experienced</FormLabel>
                                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group">
                                                            <FormControlLabel value="Yes" control={<Radio />} label="Yes"
                                                                {...register("experience", {
                                                                    required: " Enter your experience",
                                                                })} />
                                                            <FormControlLabel value="No" control={<Radio />} label="No"
                                                                {...register("experience", {
                                                                    required: " Enter your experience",
                                                                })} />
                                                        </RadioGroup>
                                                        {errors.experience && (
                                                            <p className="errormsg">{errors.experience.message}</p>
                                                        )}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <label htmlFor="">Where You Found Us</label><br />
                                                    <select name="" id="selection" {...register('reference', {
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
                                                    {errors.reference && (
                                                        <p className="errormsg">{errors.reference.message}</p>
                                                    )}

                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>

                                                    {/*
                                <TextFields fullWidth label="Upload Your Resume" type="file" variant="outlined"
                                    className='custom-file-input' InputLabelProps={{ shrink: true }}
                                    {...register("resume1", { required: "Please upload your resume" , })} /> */}
                                                    <Buttons variant="outlined" component="label" fullWidth>
                                                        Upload Your Resume
                                                        <input type="file" hidden {...register("resumeFile", {
                                                            required: "Please upload your resume",
                                                        })} />
                                                    </Buttons>
                                                    {errors.resumeFile && (
                                                        <p className="errormsg">{errors.resumeFile.message}</p>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item lg={6} md={6} sm={12} xs={12}>
                                            <TextFields fullWidth id="outlined-multiline-static" label="comments" multiline rows={9}
                                                variant="outlined" {...register("comments")} />
                                        </Grid>
                                        <Button sx={{ margin: "auto" }} className="mt-5 subbtn" type="submit"
                                            variant="contained">Submit</Button>

                                    </Grid>
                                </form>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Modal open={open} onClose={handleClose} >
                    <Box sx={Modal_Style}>
                        <div className="row">
                            <div className="col-4">
                                <ThumbUp sx={{ marginLeft: '20px', fontSize: '75px' }} />
                            </div>
                            <div className="col-8">It is our pleasure to acknowledge the receipt of your
                                application, and we will review it and get back to you as soon as possible.
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </Box>
    )
}