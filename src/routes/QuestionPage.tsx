import React from "react";
import { useEffect, useState } from "react";
import { 
    Box, 
    Typography,
    Container 
} from "@mui/material";

import Questionaire from "../components/questionaire";
import { TCrop } from "../models/TCrop";

import { useQuizContext} from "../contexts/quizContext";

// QuestionPage should be rendering the Questionaire component.
function QuestionPage() {
    
    // store what the heading for the page should be, this will change depending on the questionaire state
    // const [heading, setHeading] = useState("Let's get started");

    // we can grab the current selected crop from the quizContext
    const { currentCrop, setCurrentCrop } = useQuizContext();

    const { quizProgress, setQuizProgress } = useQuizContext();

    useEffect(() => {
        // check if the selected crop is right
        console.log("Selected crop:", currentCrop);

        // check if quiz progress is right
        console.log("Checking quiz progress:", quizProgress);
    }, [currentCrop]);
   
    // setup what the QuestionPage will look like
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

                <Typography color="primary" variant="h3" sx={{ pl: 10, pb: 5, fontWeight: "light" }}>
                    {currentCrop.name}
                </Typography>
                    
                <Questionaire />
            </Container>
        </Box>
    )
}

export default QuestionPage;