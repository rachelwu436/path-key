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

    // setup what the Homepage will look like
    return (
        <Box mt="8vh">
            <Paper>
                <Typography variant="h2" sx={{ m: 5, p: 5 }}>
                    Welcome to PathKey!
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ m: 5, p: 5 }}>
                        Select your crop from below
                </Typography>
                <SelectionMenu />
            </Paper>
        </Box>
    )

}

export default Homepage;