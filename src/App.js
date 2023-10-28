import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Aboutme from './Components/Aboutme/Aboutme';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
