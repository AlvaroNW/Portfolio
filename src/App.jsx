import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Navbar from "./components/NavBar";
import Home from "./Pages/Home";

const theme = createTheme({
    palette: {
        primary: {
            main: "#7B94AB",
        },
    },
});

function App() {
    return (
        <div id="app-container">
            <nav>
                <Navbar />
            </nav>
            <Home />
        </div>
    );
}

export default App;
