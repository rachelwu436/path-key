import React, {
  useState,
  useEffect,
  createContext,
  SetStateAction,
} from 'react';

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"; 
 
// import mui components
import { 
  Box, 
  Typography,     
  CssBaseline, 
} from "@mui/material";

// import theme related stuff
import { ThemeProvider } from "@mui/material";
import customTheme1 from "./themes/custom1";

// import routes
import Homepage from "./routes/Homepage";
import QuestionPage from "./routes/QuestionPage";

import './App.css';

// import global state manager
import { QuizProvider } from "./contexts/quizContext";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <ThemeProvider theme={customTheme1}>
          <CssBaseline>
            <Box>
              <Routes>
              {/* Define my homepage route here */}
                <Route path="/" element={<Homepage />} />
                <Route path="/QuestionPage" element={<QuestionPage />} />
              </Routes>
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
   </QuizProvider>
    
  );
}

export default App;