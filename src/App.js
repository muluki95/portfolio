import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Aboutme from './Components/Aboutme/Aboutme';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aboutme/>
      <Skills/>
    </div>
  );
}

export default App;
