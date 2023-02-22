import "./App.css";
import LandingPage from "./components/LandingPage";
import DesktopCareerComponent from "./components/DesktopCareer";
import MobileCareerComponent from "./components/MobileCareer";
import SkillsComponent from "./components/Skills";
import EducationComponent from "./components/Education";
import React, { useState } from "react";
import MapComponent from "./components/Map";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1200;

  return (
    <div className="App">
      <LandingPage></LandingPage>
      <SkillsComponent></SkillsComponent>
      {isMobile ? (
        <MobileCareerComponent></MobileCareerComponent>
      ) : (
        <DesktopCareerComponent></DesktopCareerComponent>
      )}
      <EducationComponent></EducationComponent>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
