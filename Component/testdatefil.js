import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function testdatefil() {
    // date range
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const filteredDate = js.filter((item) => {
        const date = new Date(item.date);
        return startDate && endDate
            ? date >= startDate && date <= endDate
            : true;
    });
    return (
        <div>
            <Grid item lg={5} md={5} sm={6} xs={12}>
                <div className="datepicker">
                    <label>From</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Start date"
                    />
                    <label>To</label>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="End date"
                    />
                </div>
            </Grid>
        </div>
    )
}
