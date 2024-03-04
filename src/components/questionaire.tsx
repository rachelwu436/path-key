import React, { useEffect, useState } from "react";
import SelectionMenu from "../components/selectionMenu";
import { 
    Box 
} from "@mui/material";

import { TCrop } from "../models/TCrop";
import { useQuizContext} from "../contexts/quizContext";

// the questioanire will keep track of the quiz progress and decide what to pass to the selectionMenu each time.
const Questionaire = () => {

    const { currentCrop, setCurrentCrop } = useQuizContext();
    const { quizProgress, setQuizProgress } = useQuizContext();

    useEffect(() => {
        manageCurrentOptions(currentCrop, quizProgress);
    }, [currentCrop, quizProgress]);

    // we will need to manage the options getting passed into the SelectionMenu.
    // current options will change depending on quiz stage.
    // so we will need a function to determine what to set as the current options
    const [currentOptions, setCurrentOptions] = useState<String[]>([]);

    const manageCurrentOptions = (currentCrop: TCrop, quizProgress: number) => {
        // if quizProgress is 1, then we grab the plantPart options from the TCrop.
        if (quizProgress == 1) {
            // console.log("Quiz is at stage 1 which is select plantPart", currentCrop.plantParts);
            const plantPartOptions = currentCrop.plantParts.map((plantPart) => plantPart.part); 
            
            setCurrentOptions(plantPartOptions);

            console.log("Testing ", currentCrop.plantParts);
            console.log("Test plantPartOptions variable", plantPartOptions);
        };
        // if quizProgress is 2, then we grab the subPlantPart from the plantPart index selected above ^
    };

    

    return (
        <Box>
            {/* We will need to decide what options get passed into the SelectionMenu each time based off what level in the TCrop we are in */}
            {/* options in the selectionMenu will be passed to context for persistence */}
            <SelectionMenu options={currentOptions} />
        </Box>
    );
};

export default Questionaire;