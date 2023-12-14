import './App.css'
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {

  const colors = {
    "bright1": "#F03A47",
    "bright2": "#AF5B5B",
    "base1": "#F6F4F3",
    "base2": "#DDDCDB",
    "dark1": "#276FBF",
    "dark2": "#183059"

  }
  


  //v// Screen size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //^//

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header colors={colors}/>
          <LandingSection windowWidth={windowWidth} colors={colors}/>
          <AboutMe windowWidth={windowWidth} colors={colors}/>
          <ProjectsSection windowWidth={windowWidth} colors={colors}/>
          <ContactMeSection windowWidth={windowWidth} colors={colors}/>
          <Footer/>
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
