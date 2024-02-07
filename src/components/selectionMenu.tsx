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
    Toolbar } 
from "@mui/material";

import { useNavigate, Link } from "react-router-dom";

import { useEffect, useState } from "react";

// Just setting this up for now then I will put the actual logo here
// import Logo from "../assests/Logo.svg";

// Homepage selection menu
function SelectionMenu() {
    
    // Navigation functionality to go to the quiz page (will re-render questions on same page based off of answers)
    const navigate = useNavigate();
    const goToPage = (pageName: any) => {
        navigate("/" + pageName);
    };

    return (
            
        <Box flex={1} sx={{ m: 5, p: 5 }}>
            <Box 
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 320px)"
                flexDirection="row"
                flexWrap="wrap"
                gap="50px"
            >
                <Card
                sx={{ 
                    maxWidth: 320, 
                    minWidth: 320, 
                    border: "none", 
                    ":hover": { 
                        boxShadow: 10, 
                    },
                    }}
                >
                    <CardActions>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Lettuce
                        </Typography>
                    </CardContent>
                    </CardActions>
                </Card>
                <Card
                sx={{ 
                    maxWidth: 320, 
                    minWidth: 320, 
                    border: "none", 
                    ":hover": { 
                        boxShadow: 10, 
                    },
                    }}
                >
                    <CardActions>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Kiwifruit
                        </Typography>
                    </CardContent>
                    </CardActions>
                </Card>
                <Card
                sx={{ 
                    maxWidth: 320, 
                    minWidth: 320, 
                    border: "none", 
                    ":hover": { 
                        boxShadow: 10, 
                    },
                    }}
                >
                    <CardActions>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Apple
                        </Typography>
                    </CardContent>
                    </CardActions>
                </Card>
            </Box>
        </Box>

    );
}

export default SelectionMenu;







