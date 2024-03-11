// selection menu component just takes in array of strings to display.

import * as React from "react";
import { 
    Box, 
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuizContext} from "../contexts/quizContext";

// this general selection menu will only be taking in strings.
// the strings are passed in from different levels of the TCrop object.
interface Props {
    options: String[];
}

const SelectionMenu = ({
    options,
}: Props) => {
     
    // when an answer is selected, we add it to the answers array in the quizContext
    const { answers, setAnswers } = useQuizContext();

    // increment quiz progress when next button is clicked.
    const { quizProgress, setQuizProgress } = useQuizContext();

    // prompt should change depending on quiz stage.
    const [ prompt, setPrompt ] = useState("Select from below:");

    useEffect(() => {
        togglePrompt(quizProgress);
    }, [quizProgress]);

    const togglePrompt = ( quizProgress: number ) => {
        if ( quizProgress == 1 ) {
            setPrompt("What part of the plant are you seeing symptoms?");
        }
        if ( quizProgress == 2 ) {
            setPrompt("What is the plant's growth stage?");
        }
        if ( quizProgress == 3 ) {
            setPrompt("Select the most fitting description:");
        }
    };

    const handleCardClick = (option: String, key: number) => {
        console.log("Testing click:", option);
        
        // we should then add the index of the option clicked to the quizContext.
        console.log("Testing index of option selected:", key);
        setAnswers((answers) => [...answers, key]);

        // answers are being saved. yay!
        console.log("Answers index array:", answers);
    };

    // when next button is selected, we should increment quizProgress to show we are on to another stage.
    const handleNextButton = () => {
        setQuizProgress( quizProgress + 1 );
        console.log("QuizProgress:", quizProgress);
    };

    return ( 
        <Box flex={1} sx={{ m: 5, pl: 5}}>
            <Typography variant="h5" sx={{ fontWeight: "light", mb: 5 }}>
                {prompt}
            </Typography>
            
            <Box 
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 320px)"
                flexDirection="column"
                gap="30px"
            >
                
                
                {/* we pass in the "key" prop which is actually the index of the array item */}
                {options?.map((option, key) => (
                    <Box key={key}>
                        <Card
                        sx={{ 
                            maxWidth: 800, 
                            minWidth: 300, 
                            border: "none", 
                            ":hover": { 
                                boxShadow: 10, 
                            },
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleCardClick(option, key)}
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
            {/* the next button will update the quizProgress */ }
            <Button variant="contained" 
                onClick={() => handleNextButton()} 
                sx = {{ mt: 5 }}>
                Next
            </Button>
        </Box>
    );
}

export default SelectionMenu;







