import React, { useState } from "react";
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <div>
      <Nav
        sectionSelected = {sectionSelected}
        setSectionSelected = {setSectionSelected}
      ></Nav>
      <main>
        {sectionSelected === 'about' && (<About></About>)}
        {sectionSelected === 'gallery' && (<Gallery></Gallery>)}
        {sectionSelected === 'contact' && (<ContactForm></ContactForm>)}
      </main>
    </div>
  );
}

export default App;
