// src/App.js
import React, { useState } from 'react';
import NoteEditor from './components/NoteEditor';

const App = () => {
  const [windowProperties, setWinidowProperties] = useState({
    position: {
      x: 280,
      y: 85, 
    }, 
    windowSize: {
      // Default size
      width: 650,
      height: 440,
    },
  });
    
  return (
    <div id='app' className='relative bg-red-100 min-h-lvh'>
      <NoteEditor windowProperties={windowProperties} setwindowProperties={setWinidowProperties} />
    </div>
  );
};

export default App;
