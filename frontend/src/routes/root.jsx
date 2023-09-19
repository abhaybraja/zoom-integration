import React from 'react';
import { Button, TextField, Container, Stack, Box } from '@mui/material';


import {
    useNavigate
} from "react-router-dom";
export const rootLoader = () => { return <>Loading...</> }


function Root() {
    const navigate = useNavigate();

    return (

        <Container maxWidth="xs" display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
            <Box sx={{ backgroundColor: "#00000008", p: 4, borderRadius: "8px", mt: 4 }} >
                <Stack spacing={2}>
                    <Button onClick={() => navigate('/schedule')} variant="outlined">Schedule Meeting</Button>
                    <Button onClick={() => navigate('/start')} variant="contained">Start meeting</Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default Root;
