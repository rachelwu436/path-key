import React from "react";
import { useEffect, useState } from "react";
import { 
    Box, 
    Typography,
    Container,
    Button, 
} from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import Questionaire from "../components/questionaire";
import ResultsDisplay from "../components/resultsDisplay";
import { TCrop } from "../models/TCrop";

import { useQuizContext} from "../contexts/quizContext";

import HomeIcon from "@mui/icons-material/Home";
import { Home } from "@mui/icons-material";

// QuestionPage should be rendering the Questionaire component.
function ResultPage() {

    const navigate = useNavigate();
    
   // function to change from homepage to questionpage to start the questionaire
    const goHomePage = () => {
        navigate("/");
    };

    // we need a function to go to the "fixes page"
    // once we get the disease, we should save it to the quizContext so we can access it in the "controls" page.
    const goFixesPage = () => {
        navigate("/FixesPage");
    };

    // setup what the ResultPage will look like
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

                <Box>
                    <Typography color="primary" variant="h3" sx={{ pl: 10, pb: 5, fontWeight: "regular" }}>
                        Results
                    </Typography>

                    {/* We want to display the disease identified from the quiz */}    
                    <ResultsDisplay />
                    

                    {/* Button to go to fixes page */}    
                    <Button variant="contained" 
                        onClick={goFixesPage} 
                        sx = {{ ml: 10, mt: 1 }}>
                        View controls
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default ResultPage;