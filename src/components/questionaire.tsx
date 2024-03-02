import React, { useState } from "react";
import SelectionMenu from "../components/selectionMenu";
import { 
    Box 
} from "@mui/material";

import { TCrop } from "../models/TCrop";
import { useQuizContext} from "../contexts/quizContext";

// questionaire handles question rendering logic based off the TCrop selected in the HomePage.
// so we pass in the TCrop the user selected in the Homepage.
interface Props {
    crop?: TCrop;
}

const Questionaire = ({ 
    crop, 
}: Props) => {

    const { answers, setAnswers } = useQuizContext();

    // we will need to manage the options getting passed into the SelectionMenu.
    const [currentOptions, setCurrentOptions] = useState<String[]>([]);

    return (
        <Box>
            {/* We will need to decide what options get passed into the SelectionMenu each time based off what level in the TCrop we are in */}
            {/* options in the selectionMenu will be passed to context for persistence */}
            <SelectionMenu options={currentOptions} />
        </Box>
    )
}

export default Questionaire;