import * as React from "react";
import { 
    Box, 
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Grid,
    Button,
} 
from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { TCrop } from "../models/TCrop";
import { TDisease } from "../models/TDisease";
import { useQuizContext } from "../contexts/quizContext";


import axios from "axios";

const ResultsDisplay = () => {
    
    const navigate = useNavigate();

    // grab the answer indexes that we have been tracking from the quizContext.
    const { answers, setAnswers } = useQuizContext();
    const { currentCrop, setCurrentCrop } = useQuizContext();
    
    const { identifiedDisease, setIdentifiedDisease } = useQuizContext();
    
    const [ diseaseId, setDiseaseId ] = useState("1");
    // const [ disease, setDisease ] = useState<TDisease>();

    // we need to identify the diseaseID to grab the associated disease from the server.
    useEffect(() => {
        identifyLettuceDisease(currentCrop, answers);

        // from the diseaseId, we grab the identified disease.
        // BUG //
        // i know there's an issue here where the disease is being set as "1" because the useEffect is being run twice.
        axiosGetDisease(diseaseId);
        
    }, [answers, diseaseId]);

    // function to set disease in context.
    const setDiseaseInContext = (disease: TDisease) => {
        // check if we have returned a valid disease:
        if (typeof disease !== "undefined") {
            setIdentifiedDisease(disease);
            console.log(disease.name);
        };
    };

    // grab the identified disease from the server using the diseaseId.
    // we call the getDiseaseById API.
    const axiosGetDisease = async(diseaseId: string) => {
        try {
            console.log(diseaseId);
            const response = await axios.get(`http://localhost:4000/diseaseData/${diseaseId}`);
            setIdentifiedDisease(response.data);
        }
        catch (error) {
            console.log("Error fetching item", error);
        }
    }; 

    // function to determine disease id of lettuce crop.
    // we can have a master function and several smaller functions to find disease depending on parameters - for modifiability purposes.
    // from this function, we set a disease key that can be used to grab a disease from the backend.
    const identifyLettuceDisease = (crop: TCrop, answerIndexes: number[]) => {
        // test that we are keeping quiz progress - we are!
        console.log("Answer code:", answerIndexes);
        
        // check if we are dealing with roots
        if (crop.name == "Lettuce" && answerIndexes[0] == 0) {
            identifyRootDisease(answerIndexes);
        };

        // check if we are dealing with stems
        if (crop.name == "Lettuce" && answerIndexes[0] == 1) {
            identifyStemDisease(answerIndexes);
        };

        // check if we are dealing with leaves....

    };

    // function to determine root diseases associated with lettuce:
    const identifyRootDisease = (answerIndexes: number[]) => {
        // identify the diseases associated with seedlings.
        if (answerIndexes[1] == 0) {
            setDiseaseId("5");
        }
        // identify the diseases associated with larger plants.
        if (answerIndexes[1] == 1) {
            if (answerIndexes[2] == 0) {
                setDiseaseId("2");
            };
            if (answerIndexes[2] == 1) {
                setDiseaseId("11");
            };
            if (answerIndexes[2] == 2) {
                setDiseaseId("17");
            };
            if (answerIndexes[2] == 3) {
                setDiseaseId("19");
            };
        };
        // idenfify the diseases associated with nodules and swellings on roots.
        if (answerIndexes[1] == 2) {
            setDiseaseId("28");
        };
    }; 

    // function to determine stem diseases associated with lettuce:
    const identifyStemDisease = (answerIndexes: number[]) => {
        // identify the diseases associated with seedlings.
        if (answerIndexes[1] == 0) {
            setDiseaseId("5");
        };
        
        // identify the diseases associated with larger plants.
        if (answerIndexes[1] == 1) {
            if (answerIndexes[2] == 0) {
                setDiseaseId("13");
            };
            if (answerIndexes[2] == 1) {
                setDiseaseId("9");
            };
        };

        // identify the diseases associated with internal stem discolouration.
        if (answerIndexes[1] == 2) {
            if (answerIndexes[2] == 0) {
                setDiseaseId("8");
            };
            if (answerIndexes[2] == 1) {
                setDiseaseId("15");
            };
        };
    };

    // function to identify leaf diseases associated with lettuce.......


    return ( 
        <Box flex={1} sx={{ m: 5, pl: 5}}>
            <Box 
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 320px)"
                flexDirection="column"
                flexWrap="wrap"
                gap="30px"
            >
                <Typography variant="h5" sx={{ fontWeight: "light", mb: 5 }}>
                    The disease you are likely dealing with is:
                </Typography>

                {/* We can only show the disease if we have grabbed it, otherwise we display error message */}
                <Box>
                    {identifiedDisease ? (   
                        <Box>
                            <Grid container direction="row" spacing={2}>
                                <Grid item style={{ display: "flex" }}>
                                    <Typography variant="h5" sx={{ fontWeight: "medium" }}> 
                                        {identifiedDisease.name} 
                                    </Typography>
                                </Grid>
                                <Grid item style={{ display: "flex" }}>
                                    <Typography>
                                        Latin name: {identifiedDisease.altName}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography paragraph variant="body1" sx={{ mt: 5 }}>
                                {identifiedDisease.description}
                            </Typography>

                            

                        </Box>

                    ) : (
                        <Typography>
                            Error: disease not found.
                        </Typography>
                    )}
                </Box>

            </Box>
        </Box>
    );
}

export default ResultsDisplay;







