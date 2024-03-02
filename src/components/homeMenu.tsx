import * as React from "react";
import { 
    Box, 
    Button, 
    Divider, 
    ListItemIcon, 
    Menu, 
    Container, 
    MenuItem, 
    styled, 
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
    Toolbar,
    Fade } 
from "@mui/material";

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { TCrop } from "../models/TCrop";
import { useQuizContext } from "../contexts/quizContext";

// we are passing in all the crops from the get all crops API.
interface Props {
    crops: TCrop[];
}

const SelectionMenu = ({
    crops,
}: Props) => {
  
    // we will need to set the current crop to the quiz context.
    const { currentCrop, setCurrentCrop } = useQuizContext();

    // will need to add the selectedCrop to a context where the TCrop object can be accessed throughout the questionaire.
    const handleCardClick = (selectedCrop: TCrop) => {
        console.log("Testing click:", selectedCrop.name);
        setCurrentCrop(selectedCrop);
    };

    return ( 
        <Box flex={1} sx={{ m: 5, pl: 5}}>
            <Box 
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 320px)"
                flexDirection="column"
                flexWrap="wrap"
                gap="30px"
            >
                {crops?.map((crop) => (
                    <Box key={crop.name}>
                        <Card
                        sx={{ 
                            maxWidth: 300, 
                            minWidth: 280, 
                            border: "none", 
                            ":hover": { 
                                boxShadow: 10, 
                            },
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleCardClick(crop)}
                            >
                                <CardContent>
                                    <Typography variant="h6">
                                        {crop.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default SelectionMenu;







