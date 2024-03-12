import React from "react";
import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { 
    Box, 
    Typography, 
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Button
} from "@mui/material";

import { TDisease } from "../models/TDisease";

import { useQuizContext} from "../contexts/quizContext";

import HomeIcon from "@mui/icons-material/Home";
import { Home } from "@mui/icons-material";

function FixesPage() {
    
    const navigate = useNavigate(); 

    // function to change from homepage to questionpage to start the questionaire
    const goHomePage = () => {
        navigate("/");
    };
   
    // get the identified disease from the quizContext so we can display controls.
    const { identifiedDisease, setIdentifiedDisease } = useQuizContext();
    
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

                <Typography color="primary" variant="h3" sx={{ ml: 10, pb: 5, fontWeight: "light" }}>
                    Disease control
                </Typography>
                
                <Box sx={{ ml: 7, mr: 7}}>

                    {/* will need to list controls here */}
                    <ul>
                        {identifiedDisease.controls.map((control, key) => (
                            <li key={key}>
                                {control}
                            </li>
                        ))}


                    </ul>

                    <Typography sx={{ mt: 5, pl: 2 }}>
                        {identifiedDisease.recommendation}
                    </Typography>

                    <ul>
                        {identifiedDisease.treatments.map((treatment, key) => (
                            <li key={key}>
                                {treatment}
                            </li>
                        ))}
                    </ul>
                
                </Box>

                {/* Button to return to the HomePage */}    
                <Button variant="contained" 
                    onClick={goHomePage} 
                    sx = {{ ml: 10, mt: 5 }}>
                    <HomeIcon/>
                </Button>

            </Container>
        </Box>
    )

}

export default FixesPage;