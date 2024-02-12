import React from "react";
import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { 
    Box, 
    useTheme, 
    Typography, 
    TableContainer, 
    Table, 
    TableHead, 
    TableRow, 
    TableBody,
    TableCell,
    Paper,
    Container,
    Backdrop,
    Button,
} from "@mui/material";

import SelectionMenu from "../components/selectionMenu";

import { TCropOptions } from "../models/TCropOptions";
// import { getCropOptions } from "../api/getCropOptions";

// this will be where we pull the available home options from the database.
// we will make an API call to retrieve all the crops that are available for the quiz.

function Homepage() {
    const theme = useTheme();
    // const [cropOptions, setCropOptions] = useState<TCropOptions[]>([]);

    //useEffect(() =>  {
    //    const fetchCrops = async () => {
    //        const responseData = await getCropOptions();
    //        if (responseData) {
    //            setCropOptions(responseData);
    //        }
    //    }
    //    fetchCrops();
    //}, []);

    const navigate = useNavigate();

    // function to change from homepage to questionpage to start the questionaire
    const goQuestionPage = () => {
        navigate("/QuestionPage");
    };

    // setup what the Homepage will look like
    return (
        <Box>
            <Container color="primary">
                <Box component="img" sx={{
                    height: 200,
                    width: 1000,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 1000, md: 1000 },
                }}
                alt="PathKey background elements"
                src="/src/assets/pathkey_background_decor.png"
                />

                <Typography color="primary" variant="h3" sx={{ pl: 10, pb: 10, fontWeight: "light" }}>
                    Welcome to PathKey!
                </Typography>
                <Typography variant="h5" sx={{ pl: 10, fontWeight: "light" }}>
                        Select your crop from below
                </Typography>
                <SelectionMenu />

                {/* the next button will change the route to go to the Questionpage */ }
                <Button variant="contained" 
                    onClick={goQuestionPage} 
                    sx = {{ ml: 10, mt: 2 }}>
                    Next
                </Button>

            </Container>
        </Box>
    )

}

export default Homepage;