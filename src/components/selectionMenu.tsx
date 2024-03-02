import * as React from "react";
import { 
    Box, 
    Card,
    CardContent,
    CardActionArea,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// this general selection menu will only be taking in strings.
// the strings are passed in from different levels of the TCrop object.
interface Props {
    options: String[];
}

const SelectionMenu = ({
    options,
}: Props) => {

    // Navigation functionality to go to the quiz page (will re-render questions on same page based off of answers)
    const navigate = useNavigate();
         
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
                {options?.map((option) => (
                    <Box>
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
                                onClick={() => handleCardClick(option)}
                            >
                                <CardContent>
                                    <Typography variant="h6">
                                        {option}
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







