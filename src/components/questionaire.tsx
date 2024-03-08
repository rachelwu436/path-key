import React, { useEffect, useState } from "react";
import SelectionMenu from "../components/selectionMenu";
import { 
    Box 
} from "@mui/material";

import { TCrop } from "../models/TCrop";
import { useQuizContext} from "../contexts/quizContext";

import { useNavigate } from "react-router-dom";

// the questioanire will keep track of the quiz progress and decide what to pass to the selectionMenu each time.
const Questionaire = () => {

    const navigate = useNavigate();

    const { currentCrop, setCurrentCrop } = useQuizContext();
    const { quizProgress, setQuizProgress } = useQuizContext();
    const { answers, setAnswers } = useQuizContext();
    

    useEffect(() => {
        manageCurrentOptions(currentCrop, quizProgress);
    }, [currentCrop, quizProgress]);

    // function to change from homepage to questionpage to start the questionaire
    const goResultsPage = () => {
        navigate("/ResultPage");
    };

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

            //console.log("Testing ", currentCrop.plantParts);
            //console.log("Test plantPartOptions variable", plantPartOptions);
        };
        
        // if quizProgress is 2, then we grab the subPlantPart from the plantPart index selected above ^
        if (quizProgress == 2) {
            // will need to grab the index of the answer from the previous section so we can do currentCrop.plantParts[index].map((subPart) => subPart.subPart);
            const plantPartIndex = answers[0];
            
            const subPartOptions = currentCrop.plantParts[plantPartIndex].subParts.map((subPart) => subPart.subPart);

            // check we are grabbing the correct subPart list
            //console.log("Subpart list:", currentCrop.plantParts[plantPartIndex].subParts);
            console.log(subPartOptions); // we are getting the correct subPart array.
            
            // now we need to pass the subPartOptions to the currentOptions so that it can be passed to the selectionMenu.
            setCurrentOptions(subPartOptions);
        };
        
        // if quizProgress is 3, then we grab the questions from the subPart index selected in the previous section.
        if (quizProgress == 3) {
            // will need to grab the index of the answer from the previous section so we know what subPart we want to display questions for.
            const plantPartIndex = answers[0]
            const subPartIndex = answers[1];

            // check we are grabbing the correct question list.
            //console.log("Questions list", currentCrop.plantParts[plantPartIndex].subParts[subPartIndex]);

            const questionOptions = currentCrop.plantParts[plantPartIndex].subParts[subPartIndex].questions.map((question) => question);
            console.log(questionOptions);

            // now we need to pass the questionOptions to the currentOptions so that it can be passed to the selectionMenu.
            setCurrentOptions(questionOptions);
        };

        // if the quizProgress is 4, it means the quiz has ended and can now display the results page.
        if (quizProgress == 4) {
            goResultsPage();
        };
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