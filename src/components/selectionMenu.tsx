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
import { useSelectedOptions } from "../optionsContext";

// we are passing in an array of prompts to select from
interface Props {
    prompts: TCrop[];
}

const SelectionMenu = ({
    prompts,
}: Props) => {

    // Navigation functionality to go to the quiz page (will re-render questions on same page based off of answers)
    const navigate = useNavigate();

    const { selectedOptions, addOption, removeOption } = useSelectedOptions();

    const handleCardClick = (option: String) => {
        console.log("Testing click:", option);
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
                {prompts?.map((prompt) => (
                    <Box key={prompt.name}>
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
                                onClick={() => handleCardClick(prompt.name)}
                            >
                                <CardContent>
                                    <Typography variant="h6">
                                        {prompt.name}
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







