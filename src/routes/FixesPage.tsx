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
    ListItemText
} from "@mui/material";

import { TDisease } from "../models/TDisease";

import { useQuizContext} from "../contexts/quizContext";

function FixesPage() {
    
    const navigate = useNavigate(); 
   
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

                <Typography color="primary" variant="h3" sx={{ pl: 10, pb: 10, fontWeight: "light" }}>
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

                    <Typography sx={{ mt: 5 }}>
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

            </Container>
        </Box>
    )

}

export default FixesPage;