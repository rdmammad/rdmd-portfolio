import React from 'react';
import './App.css';
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Header/>
        <section id="projects"></section>
        <section id="about"></section>
        <section id="experience"></section>
        <section id="contact"></section>
      <Footer/>
    </div>
  );
}

export default App;
