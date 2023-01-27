import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Tabledata({ data, search, value, sdate, edate, dateFilter }) {
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
    // modal style 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    //   modal actions 
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
    //   rstatus action 
    const [rstatus, setrstatus] = useState("Update")
    const [updatestatus, setupdatestatus] = useState(null)
    console.log(updatestatus, 'hdddsssmm')
    // const statusbtn = (e) => {
    //     setupdatestatus(data)
    //     setrstatus(e.target.value)
    //     const statusdata = document.getElementById("statusdata")
    //     if (statusdata === 'Accepted') {
    //         statusdata.style.color = "Green"
    //     } else if (statusdata === 'Hold' && statusdata === 'Waiting') {
    //         statusdata.style.color = "Orange"
    //     } else if (statusdata === 'Failed') {
    //         statusdata.style.color = "red"
    //     }
    //     else {
    //         statusdata.style.color = "blue"
    //     }
    // }
    console.log(updatestatus, "update")
    const updatestatusfunc = (d) => {
        setupdatestatus(d)
    }

    return (
        <div className="container mt-5 mb-5">
            {currentItems?.length === 0 ? (
                <div className="card-loading loading-card loading-is-loading mx-auto">
                    <div className='d-flex'>
                        <h1 className='loading-card-cell' ></h1>
                        <h1 className='loading-card-cell' ></h1>
                        <h1 className='loading-card-cell' ></h1>
                        <h1 className='loading-card-cell' ></h1>
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
                    <table className="table table-bordered align-middle" id="table1" >
                        <thead>
                            <tr>
                                <th style={{ "width": "4%" }}>id</th>
                                <th style={{ "width": "10%" }}>Full Name</th>
                                <th style={{ "width": "20%" }}>Email</th>
                                <th style={{ "width": "10%" }}>Contact Number</th>
                                <th style={{ "width": "10%" }}>Qualification</th>
                                <th style={{ "width": "7%" }}>Date</th>
                                <th style={{ "width": "10%" }}>SkillSets</th>
                                <th style={{ "width": "4%" }}>Experienced</th>
                                <th style={{ "width": "6%" }}>Reference</th>
                                <th style={{ "width": "10%" }}>Resume</th>
                                <th style={{ "width": "30%" }}>Comment</th>
                                <th style={{ "width": "10%" }}>Status</th>
                                <th style={{ "width": "10%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems?.filter((value) => {
                                if (search === "") {
                                    return value;
                                } else if (
                                    value.fname.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return value;
                                }
                            }).map((d, i) => {
                                return (
                                    <tr key={i}>
                                        <td >{d.id}</td>
                                        <td>{d.fname + " " + d.lname}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.email}</td>
                                        <td>{d.contact}</td>
                                        <td>{d.quali}</td>
                                        <td>{d.date}</td>
                                        <td>{d.skill}</td>
                                        <td>{d.experi}</td>
                                        <td>{d.refer}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.file}</td>
                                        <td>{d.para.slice(0, 100)}</td>
                                        {updatestatus === d.id ? <td id="status-data">{rstatus}</td> : <td id="status-data">Update Resume </td>}
                                        <td><Button onClick={() => { handleOpen(); updatestatusfunc(d.id); }}>Update</Button></td>

                                        {/* zydni data  */}
                                        {/* <td >{i}</td>
                                        <td>{d.FirstName + " " + d.LastName}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.Email}</td>
                                        <td>{d.ContactNumber}</td>
                                        <td>{d.Qualification}</td>
                                        <td>{d.Date}</td>
                                        <td>{d.SkillSet}</td>
                                        <td>{d.AreYouExperienced}</td>
                                        <td>{d.WhereYouFoundUs}</td>
                                        <td style={{ "wordBreak": "break-all" }}>{d.resume1}</td>
                                        <td>{d.Comments}</td>
                                        {updatestatus == d.id ? <td id="status-data">{rstatus}</td> : <td id="status-data">Update Profile</td>}
                                        <td>{d.Status}</td>
                                        <td><Button onClick={handleOpen}>Update</Button></td> */}

                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            )}
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
                        <Box sx={{ "margin": "auto" }} className="modal-box">
                            <Button value="Normal Discussion" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color="success" >Normal Discussion</Button>
                            <Button value="Technical Round" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color="warning" >Technical Round</Button>
                            <Button value="Short listed" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color="warning" >Short listed</Button>
                            <Button value="Selected" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color='success' >Selected</Button>
                            <Button value="Hold" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color="error" >Hold</Button>
                            <Button value="Onboard" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color='success' >Onboard</Button>
                            <Button value="Rejected" sx={{ "margin": "10px" }} onClick={(e) => {

                                setrstatus(e.target.value)
                            }} variant="outlined" color="error" >Rejected</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowForwardIos />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<ArrowBackIos />}
                renderOnZeroPageCount={null}
                activeLinkClassName="active"
                containerClassName={'pagination'}
            />
        </div>
    );

}
