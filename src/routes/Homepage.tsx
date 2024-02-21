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

import axios from "axios";

import SelectionMenu from "../components/selectionMenu";

import { TCrop } from "../models/TCrop";
// import { getCropOptions } from "../api/getCropOptions";

// this will be where we pull the available home options from the database.
// we will make an API call to retrieve all the crops that are available for the quiz.

// need to create a type interface so when we pass in JSON data, we can assign it a type
interface props {
    crops: TCrop[];
}

function Homepage({
    crops,
}: props) {
    const theme = useTheme();
    const navigate = useNavigate();
    //const [selectData, setSelectData] = useState([]);
    const [selectValue, setSelectValue] = useState('')

    const [cropOptions, setCropOptions] = useState<TCrop[]>([]);

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        console.log("crops:", cropOptions)
        return () => {
            processing = false
        }
    },[])

    // function to fetch
    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/crops')
        .then(res => {
            if (processing) {
                setCropOptions(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const SelectDropdown = () => {
        return (
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value="" key="none"> -- Select One -- </option>
                {
                    cropOptions?.map( (item) => (
                        <option value={item.name} key={item.name}>{item.name}</option>
                    ))
                }
            </select>
        )
    }    

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
                <SelectDropdown />

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