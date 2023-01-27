import React, { useState, useEffect } from "react";
import Tabledata from "./Tabledata";
import { CSVLink } from "react-csv";
import { Box, Button, FormControl, Grid, IconButton, MenuItem, Stack, TextField } from "@mui/material";
import { Refresh, Replay, Search } from "@mui/icons-material";
import Addtable from "./addtable";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";

export default function Filteration() {
    const TextFields = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'Black',
                borderRadius: "10px"
            }
        },
    });
    // data fetch
    const [js, setjs] = useState([]);
    useEffect(() => {
        fetch("https://api.mockaroo.com/api/2b1e9230?count=1000&key=abad0ad0")
            .then((response) => response.json())
            .then((data) => setjs(data));
    }, []);
    // useEffect(() => {
    //     fetch('http://192.168.0.101:8081/api/zydniapi')
    //         .then((response) => response.json())
    //         .then((data) => setjs(data));
    // }, []);
    // console.log(js);
    //  search entites
    const [value, setValue] = useState(5);
    // search bar
    const [search, setsearch] = useState("");
    const searchitem = (e) => {
        setsearch(e.target.value);
    };
    // date range
    // const [startDate, setStartDate] = useState("");
    // const [endDate, setEndDate] = useState("");

    // Refresher button
    const refresher = () => {
        window.location.reload(false);
    };
    return (
        <Box>
            <Head>
                <title>Employee data</title>
            </Head>
            <div className="container d-flex heading mt-4 mb-5">
                <Image height={100} width={200} src="/zydni_logo.png" alt="LOGO" />
                <p className="resume-text  text-center">Zydni Resume Portal</p>
            </div>
            <div className="container center-box mt-2 mb-2">
                <Stack spacing={3}>
                    <Grid container spacing={2} className="filters">
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                                <TextFields
                                    variant="outlined"
                                    fullWidth
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    select
                                    label="Show Entities"
                                >
                                    <MenuItem key={1} value="5">
                                        5
                                    </MenuItem>
                                    <MenuItem key={2} value="10">
                                        10
                                    </MenuItem>
                                    <MenuItem key={3} value="25">
                                        25
                                    </MenuItem>
                                    <MenuItem key={4} value="50">
                                        50
                                    </MenuItem>
                                    <MenuItem key={5} value="100">
                                        100
                                    </MenuItem>
                                    <MenuItem key={6} value={js.length}>
                                        Show All
                                    </MenuItem>
                                </TextFields>

                            </FormControl>
                        </Grid>
                        <Grid item lg={2} md={3} sm={3} xs={12}>
                            {/* <div className="datepicker">
                                <label>From</label>
                                <DatePicker
                                    selected={startDate}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                                <label>To</label>
                                <DatePicker
                                    selected={endDate}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    onChange={(date) => setEndDate(date)}
                                />
                            </div> */}
                            <div className="mt-3">
                            <Addtable/>
                            </div>
                                
                        </Grid>
                        <Grid item lg={1} md={1} sm={2} xs={6}>
                            <Button aria-label="refresh" sx={{ padding: "10px 10px", marginTop: '10px' }}>
                                <Replay onClick={refresher} />
                            </Button>
                        </Grid>
                        <Grid item lg={2 } md={3} sm={3} xs={6}>
                            <Button className="expbtn" variant="contained" sx={{ marginTop: "14px" }}><CSVLink data={js}>Export</CSVLink>
                            </Button>
                        </Grid>
                        <Grid item lg={4} md={7} sm={7} xs={12}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx searchbar" onChange={(e) => {
                                    setsearch(e.target.value);
                                }} label="Search..." variant="standard" />
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </div>               
            <Tabledata
                value={value}
                search={search}
                data={js}
                // sdate={startDate}
                // edate={endDate}
            />

        </Box>
    );
}
