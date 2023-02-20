import "./App.css";
import LandingPage from "./components/LandingPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import CareerComponent from "./components/Career";
import SkillsComponent from "./components/Skills";
import EducationComponent from "./components/Education";
import React, { useEffect, useRef } from "react";
import MapComponent from "./components/Map";

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar  scrollToElement={() => {}}></ResponsiveAppBar>
      <LandingPage></LandingPage>
      <SkillsComponent></SkillsComponent>
      <CareerComponent></CareerComponent>
      <EducationComponent></EducationComponent>
      <MapComponent></MapComponent>
    </div>
  );
}

export default App;
