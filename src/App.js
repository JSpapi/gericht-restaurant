import React from "react";
import {
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./containers";
import {Navbar} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
