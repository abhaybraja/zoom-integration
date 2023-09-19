import React, { useState } from 'react';
import axios from "axios";
import { Button, TextField, Container, Stack, Box } from '@mui/material';

import {
    useNavigate
} from "react-router-dom";
function StartMeeting() {
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
            
        </Container>


    );
}

export default StartMeeting;
