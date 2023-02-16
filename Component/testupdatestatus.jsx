import { Backdrop, Button, Fade, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { style } from "../styles/muistyle"

export default function UpdateStatus({ open, handleClose, updatingstatus }) {
    return (
        <>
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
                        {/* <Box sx={{ "margin": "auto" }} className="modal-box">
                            <Button value="Normal Discussion" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="success" >Normal Discussion</Button>
                            <Button value="Technical Round" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="warning" >Technical Round</Button>
                            <Button value="Short listed" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="warning" >Short listed</Button>
                            <Button value="Selected" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color='success' >Selected</Button>
                            <Button value="Hold" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="error" >Hold</Button>
                            <Button value="Onboard" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color='success' >Onboard</Button>
                            <Button value="Rejected" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="error" >Rejected</Button>
                        </Box> */}
                        <Box sx={{ "margin": "auto" }} className="modal-box">
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Normal Discussion" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="success" >Normal Discussion</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Technical Round" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="warning" >Technical Round</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Short listed" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="warning" >Short listed</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Selected" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color='success' >Selected</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Hold" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="error" >Hold</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Onboard" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color='success' >Onboard</Button>
                            <Button {...register("Status", {
                                required: "Please upload your resume"
                            })} value="Rejected" sx={{ "margin": "10px" }} onClick={updatingstatus} variant="outlined" color="error" >Rejected</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
