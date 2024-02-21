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
    CardActions,
    Typography,
    Toolbar,
    Fade } 
from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import { useEffect, useState } from "react";

// we are passing in an array of prompts to select from
interface Props {
    prompts: string[];
}

// Just setting this up for now then I will put the actual logo here
// import Logo from "../assests/Logo.svg";

// Homepage selection menu

// we should be passing in certain fields to the selection menu, so the menu can reflect certain data fields
// at the moment we are hardcoding, but we want this component to be reusable so that we can pass in certain selections to be chosen from.
// when we use the selectionMenu again, it should be populated by new fields to choose from and so on.
const SelectionMenu = ({
    prompts,
}: Props) => {

    // Navigation functionality to go to the quiz page (will re-render questions on same page based off of answers)
    const navigate = useNavigate();
    

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
                        <CardActions>
                        <CardContent>
                            <Typography variant="h6">
                                {prompt}
                            </Typography>
                        </CardContent>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default SelectionMenu;







