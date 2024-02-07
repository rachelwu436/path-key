import {
    createTheme,
    responsiveFontSizes,
    Palette,
    PaletteColorOptions,
    SimplePaletteColorOptions,
} from "@mui/material/styles";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


// here we will now declare the global theme:
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#00e676",
        },
    },
    typography: {
        h2: {
            fontSize: "5rem"
        }
    }
});

export default theme;