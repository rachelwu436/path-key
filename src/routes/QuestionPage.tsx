import React from "react";
import { useEffect, useState } from "react";
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
    TextField,
} from "@mui/material";

import { useParams } from "react-router-dom";
import axios from "axios";

import SelectionMenu from "../components/selectionMenu";

import { TCropOptions } from "../models/TCropOptions";

// the QuestionPage is going to conditionally render each time the "Next" button is pressed.
// depending on the answers each time the page is rendered, new questions will be displayed.
// the QuestionPage will keep rerendering until a disease can be identified based on the set of answers.
// so we will need to keep track of several variables and call several functions to check for disease identification.
function QuestionPage() {
    const theme = useTheme();
    
    // useful for passing in ids to grab data to display.
    const params = useParams();

    // store what the heading for the page should be, this will change depending on the questionaire state
    const [heading, setHeading] = useState("Let's get started");

    const [selectData, setSelectData] = useState([]);

    // we need to do some additional overhead since useEffect fetches data twice.
    // by using the extra "processing" variable, we make sure we are only fetching once.
    useEffect( ()=> {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    }, [])

    // function to fetch
   const axiosFetchData = async(processing) => {
    await axios.get("http://localhost:4000/diseases")
    .then(res => {
        if (processing) {
            setSelectData(res.data)
        }
    })
    .catch(err => console.log(err))
   }
   
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

                <Typography color="primary" variant="h3" sx={{ pl: 10, pb: 10, fontWeight: "light" }}>
                    {heading}
                </Typography>
                    
                <Typography variant="h5" sx={{ pl: 10, fontWeight: "light" }}>
                        Select your crop from below
                </Typography>
                
            </Container>
        </Box>
    )

}

export default QuestionPage;