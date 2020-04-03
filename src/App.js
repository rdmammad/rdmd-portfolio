import React from 'react';
import Header from "./components/header/header.component";
import Projects from "./sections/projects/projects.component";
import Footer from "./components/footer/footer.component";
import Experience from "./sections/experience/experience.component";
import Contact from "./sections/contact/contact.component";
import "./App.scss";

function App() {
  return (
    <div className="rdmammad__portfolio">
        <div className="background__header">
            <Header/>
            <Projects/>
        </div>
        {/*<section id="about"></section>*/}
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
