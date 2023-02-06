import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Backdrop, Box, Button, Fade, FormControl, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { style } from "../styles/muistyle"


export default function Tabledata({resumeList, data, value }) {
    // pagination
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = value;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data && data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data && data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (d) => {
        console.log(d)
        axios.put(`http://192.168.0.100:8030/api/resumeapi/${updatestatus}`, d).then((res) => {
            console.log('working', res);
            setOpen(false);
            resumeList();
        }).catch((e) => {
            console.log('ERROR OCCURED', e);
        })
    }

    // modal actions
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
    // rstatus action
    const [updatestatus, setupdatestatus] = useState(null)
    console.log(updatestatus)

    return (
        <div className="container mt-5 mb-5">
            {currentItems?.length === 0 ? (
                <div className="card-loading loading-card loading-is-loading mx-auto">
                    <div className='d-flex'>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                    </div>
                    <div className='d-flex'>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                        <h1 className='loading-card-cell'></h1>
                    </div>
                </div>
            ) : (
                <div className="table-responsive-xxl">
                    <table className="table table-bordered align-middle" id="table1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th style={{ "width": "20%" }}>Full Name</th>
                                <th style={{ "width": "20%" }}>Email</th>
                                <th style={{ "width": "20%" }}>Contact Number</th>
                                <th>Qualification</th>
                                <th>Date</th>
                                <th>SkillSets</th>
                                <th>Experienced</th>
                                <th>Reference</th>
                                <th style={{ "width": "20%" }}>Resume</th>
                                {/* <th style={{ "width" : "30%" }}>Comment</th> */}
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems?.map((d, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{d.Id}</td>
                                        <td>{d.FirstName + " " + d.LastName}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.Email}</td>
                                        <td>{d.ContactNo}</td>
                                        <td>{d.Qualification}</td>
                                        {/* <td>{new Date(d.Date).getDate() + "/" + new Date(d.Date).getMonth()   + "/" + new Date(d.Date).getFullYear()}</td> */}
                                        <td>{new Date(d.Date).toLocaleDateString()}</td>
                                        <td>{d.SkillSet}</td>
                                        <td>{d.Experience}</td>
                                        <td>{d.Reference}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.resume1}</td>
                                        <td id="statusData">{d.Status}</td>
                                        <td><Button onClick={() => { handleOpen(); setupdatestatus(d.Id); }}>Update</Button></td>
                                        {/* <td>{d.Comments}</td> */}
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            )}
            <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open}
                onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500, }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <form sx={{ "margin": "auto" }} className="modal-box" onSubmit={handleSubmit(onSubmit)}>
                            <Box>
                                <FormControl>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group">
                                        <FormControlLabel control={<Radio />} label="Normal Discussion" {...register("Status", {
                                            required: true
                                        })} value="Normal Discussion"
                                        />
                                        <FormControlLabel control={<Radio />} label="Technical Round" {...register("Status", {
                                            required: true
                                        })} value="Technical Round"
                                        />
                                        <FormControlLabel control={<Radio />} label="Short listed" {...register("Status", {
                                            required: true
                                        })} value="Short listed"
                                        />
                                        <FormControlLabel control={<Radio />} label="Selected" {...register("Status", {
                                            required: true
                                        })} value="Selected"
                                        />
                                        <FormControlLabel control={<Radio />} label="Hold" {...register("Status", {
                                            required: true
                                        })} value="Hold"
                                        />
                                        <FormControlLabel control={<Radio />} label="Onboard" {...register("Status", {
                                            required: true
                                        })} value="Onboard"
                                        />
                                        <FormControlLabel control={<Radio />} label="Rejected" {...register("Status", {
                                            required: true
                                        })} value="Rejected"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Button sx={{ margin: "auto !important", width: '100px !important' }} className="mt-3 subbtn"
                                type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
            <ReactPaginate breakLabel="..." nextLabel={<ArrowForwardIos />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={
                    <ArrowBackIos />}
                renderOnZeroPageCount={null}
                activeLinkClassName="active"
                containerClassName={'pagination'}
            />
        </div>
    );

}