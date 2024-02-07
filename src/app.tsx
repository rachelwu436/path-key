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

import './App.css';


function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
          <ThemeProvider theme={customTheme1}>
            <Box>
              <Routes>
                {/* Define my homepage route here */}
                <Route path="/" element={<Homepage />} />
              </Routes>
            </Box>
          </ThemeProvider>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;