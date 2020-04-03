import React from 'react';
import Header from "./components/header/header.component";
import ReactCarousel from "./components/react-carousel/react-carousel.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header/>
        <section id="projects" className="sasa">
            <ReactCarousel/>
        </section>
        {/*<section id="about"></section>*/}
        <section id="experience"></section>
        <section id="contact"></section>
      <Footer/>
    </div>
  );
}

export default App;
