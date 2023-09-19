import React, { useState } from 'react';
import axios from "axios";
import { Button, TextField, Container, Stack, Box } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import {
    useNavigate
} from "react-router-dom";
function ScheduleMeeting() {
    const navigate = useNavigate();
    const [topic, setTopic] = useState(null);
    const [agenda, setAgenda] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [loading, setLoading] = useState(false);


    const scheduleAPI = async () => {
        const payload = { topic: topic, agenda: agenda, start_time: startTime }
        console.log(payload)
        return
        setLoading(true);
        await axios({
            method: 'get',
            url: `http://localhost:8000/api/meeting/create`,
            data: payload, // YYYY-MM-DD hh:mm
            headers: {
                Authorization: "your auth token here"
            }
        }).then(res => {
            console.log("Meeting successfully created!")
        }).catch((err) => {
            console.log(err)
        })
        setLoading(false);
    }

    return (
        <Container maxWidth="xs" display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
            <Box sx={{ backgroundColor: "#00000008", p: 4, borderRadius: "8px", mt: 4 }} >
                <Stack spacing={2}>
                    <TextField onChange={(e) => setTopic(e.target.value)} id="filled-basic" label="Topic" variant="outlined" />
                    <TextField onChange={(e) => setAgenda(e.target.value)} id="filled-basic" label="Agenda" variant="outlined" />
                    {/* <TextField onChange={(e) => setStartTime(e.target.value)} id="filled-basic" label="Filled" variant="filled" /> */}
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimePicker onChange={(value) => setStartTime(value.format('YYYY-MM-DD hh:mm'))} label="Start time" />
                    </LocalizationProvider>
                    <Button loa onClick={scheduleAPI} variant="contained">Schedule Meeting</Button>
                    <Button onClick={() => navigate(-1)} size="small">Back</Button>
                </Stack>
            </Box>
        </Container>


    );
}

export default ScheduleMeeting;
