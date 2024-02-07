import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./components/pages/Home";
import Project from "./components/pages/Project.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utilities/Themes.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path="/" element ={<Home/>}/>
          <Route path="/projects" element ={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
