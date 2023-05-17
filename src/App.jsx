import React, { useState } from "react";
import ProjectCarousel from './components/ProjectCarousel'
import NavBar from './components/NavBar'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: "#7B94AB"
    },
  },
});

function App() {


  return (
    <div id="app-container">
      <nav>
        <ThemeProvider theme={theme}>
          <NavBar />
        </ThemeProvider>
      </nav>
      <main>
        <section>
          <div>Profile</div>
          <div>Skills</div>
        </section>
        <article>
          <div><ProjectCarousel /></div>
          <div>Solo Projects</div>
        </article>
      </main>
      <footer>
        Copy
      </footer>
    </div>
  
  )
}

export default App
