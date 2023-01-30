import React, { useState } from 'react'
import { Backdrop, Button, Fade, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Modal, Radio, RadioGroup, Stack, styled, TextField, } from '@mui/material';
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Addtable() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '-webkit-fill-available',
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const TextFields = styled(TextField)({
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'Black',
                borderRadius: "10px",
                margin: '0px 4px'
            },
            '&:hover fieldset': {
                borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
            },
            '&.Mui-focused fieldset ': {
                borderColor: 'black',
            }, '& label.Mui-focused': {
                color: 'black',
            },
        },
    });
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [data, setdata] = useState([]);
    const onSubmit = (d) => {

        const body = {
            ...d,
            Reference: "Instag"
        }
        console.log("THIS IS THE DATA <><><>", d);
        // setdata(d)
        // fetch('http://192.168.0.101:8030/api/resumeapi', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         FirstName: '',
        //         LastName:'',
        //         Email: '',
        //         ContactNo:'',
        //         Qualification:'',
        //         SkillSet:'',
        //         Experience:'',    
        //         Reference:'',    
        //         resume1:'',    
        //       }), 
        //          body: JSON.stringify(d),
        //       headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //       },
        //   })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        //     axios({
        //         method: 'post',
        //         url: 'http://192.168.0.101:8030/api/resumeapi',
        //         data: {
        //         FirstName: d.FirstName,
        //         LastName: d.LastName,   
        //         Email: d.Email,
        //         ContactNo: d.ContactNo,
        //         Qualification: d.Qualification,
        //         SkillSet: d.SkillSet,
        //         Experience: d.Experience,
        //         Reference: d.Reference,
        //         resume1: d.resume1,
        //     }})         .catch(function (error) {
        //         console.log(error);
        //       });
        // }


        // {
        //     "FirstName": "Raashid Test",
        //     "LastName": "R",
        //     "Email": "rass@gmail.com",
        //     "ContactNo": 6465515,
        //     "Qualification": "BCA",
        //     "SkillSet": "Jasdsva",
        //     "Experience": true,
        //     "Reference": "others",
        //     "Status": true,
        //     "Comments": "sdfbjshdbfhjksdbfhjsdbfjhsd",
        //     "resume1": null
        // }

        axios(`http://192.168.0.101:8030/api/resumeapi`, body).then((res) => {
            console.log('THIS IS THE RESPONSE FROM THE API RAASHID', res);
        }).catch((e) => {
            console.log('ERROR OCCURED', e);
        })


        // axios.post('http://192.168.0.101:8030/api/resumeapi', d).then(function (response) {
        //     console.log(response);
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    console.log(data)
    return (
        <Box>
            <Button onClick={handleOpen} variant="contained" sx={{ width: 'fit-content !important', marginTop: "14px" }} className="addempbtn">Add Employee</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <p className="addnewem">Add New Employee </p>
                        <form onSubmit={handleSubmit(onSubmit)}  >
                            <Stack spacing={3}>
                                <Grid container>
                                    <Grid item lg={6}><TextFields fullWidth sx={{ margin: '0px 5px' }} label="First Name" variant="outlined"  {...register("FirstName", {
                                        required: " Enter your firstname",
                                    })} />
                                        {errors.FirstName && (
                                            <p className="errormsg">{errors.FirstName.message}</p>
                                        )}</Grid>
                                    <Grid item lg={6}> <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Last Name" variant="outlined" {...register("LastName", {
                                        required: " Enter your Last Name",
                                    })} />
                                        {errors.LastName && (
                                            <p className="errormsg">{errors.LastName.message}</p>
                                        )} </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={6}><TextFields fullWidth sx={{ margin: '0px 5px' }} label="Email" type={"email"} variant="outlined" {...register("Email", {
                                        required: " Enter your E-Mail",
                                    })} />
                                        {errors.Email && (
                                            <p className="errormsg">{errors.Email.message}</p>
                                        )}</Grid>
                                    <Grid item lg={6}> <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Contact Number" type={"number"} variant="outlined" {...register("ContactNo", {
                                        required: " Enter your Contact Number",
                                    })} />{errors.ContactNo && (
                                        <p className="errormsg">{errors.ContactNo.message}</p>
                                    )} </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={6}> <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Qualification" variant="outlined" {...register("Qualification", {
                                        required: " Enter your Qualification",
                                    })} />
                                        {errors.Qualification && (
                                            <p className="errormsg">{errors.Qualification.message}</p>
                                        )}</Grid>
                                    <Grid item lg={6}><TextFields fullWidth sx={{ margin: '0px 5px' }} label="Skillset" variant="outlined" {...register("SkillSet", {
                                        required: " Enter your Skillsets",
                                    })} />
                                        {errors.SkillSet && (
                                            <p className="errormsg">{errors.SkillSet.message}</p>
                                        )} </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={6}>
                                        <Stack spacing={3}>
                                            <Grid item lg={12}> <FormControl>
                                                <FormLabel id="demo-row-radio-buttons-group-label">Are You Experienced</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" {...register("Experience", {
                                                        required: " Enter your Experience",
                                                    })} />
                                                    <FormControlLabel value="No" control={<Radio />} label="No"  {...register("Experience", {
                                                        required: " Enter your Experience",
                                                    })} />
                                                </RadioGroup>
                                                {errors.Experience && (
                                                    <p className="errormsg">{errors.Experience.message}</p>
                                                )}
                                            </FormControl></Grid>
                                            <Grid item lg={12}>
                                                {/* <TextFields
                                                variant="outlined"
                                                fullWidth sx={{ margin: '0px 5px' }}
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                select
                                                label="Where You Found Us"
                                            // {...register("social", { required: "Select an option" })}
                                            >
                                                <MenuItem key={1} value="Instagram">
                                                    Instagram
                                                </MenuItem>
                                                <MenuItem key={2} value="Facebook">
                                                    Facebook
                                                </MenuItem>
                                                <MenuItem key={3} value="Linkedin">
                                                    Linkedin
                                                </MenuItem>
                                                <MenuItem key={4} value="Whatsapp">
                                                    Whatsapp
                                                </MenuItem>
                                                <MenuItem key={5} value="From Others">
                                                    From Others
                                                </MenuItem>
                                            </TextFields> */}
                                                {errors.social && (
                                                    <p className="errormsg">{errors.social.message}</p>
                                                )}</Grid>
                                            {/* <Grid item lg={12}> 
                                            <TextFields fullWidth sx={{ margin: '0px 5px' }} label="Upload Your Resume" type="file" variant="outlined" InputLabelProps={{ shrink: true }}   {...register("resume", {
                                                required: "Please upload your resume",
                                            })} />
                                                {errors.resume && (
                                                    <p className="errormsg">{errors.resume.message}</p>
                                                )}</Grid> */}
                                        </Stack>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Grid item lg={12}>
                                            <TextFields fullWidth sx={{ margin: '0px 5px' }}
                                                id="outlined-multiline-static"
                                                label="Comments"
                                                multiline
                                                rows={8}
                                                variant="outlined"
                                            /></Grid>
                                    </Grid>
                                </Grid>
                                <Button sx={{ margin: "auto !important", width: '100px !important' }} className="mt-3 subbtn" type="submit" variant="contained">Submit</Button>

                            </Stack>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}
