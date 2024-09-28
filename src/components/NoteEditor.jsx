import React, { useState } from 'react'

const NoteEditor = ({ 
  windowProperties, 
  setwindowProperties 
}) => {

  const [ note, setNote ] = useState('Welcome to Modelo Notes! \nTake productive notes while surfing the internet.');
  const [ isDragging, setIsDragging ] = useState(false);
  const [ mouseOffset, setMouseOffset ] = useState({
    x: 0,
    y: 0
  });

  const handleChange = (event) => {
    event.preventDefault();
    setNote(event.target.value);
  }

  const handleMouseDown = (event) => {
    // Calculate the mouse's offset relative to the top-left corner of the card
    const offsetX = event.clientX - windowProperties.position.x;
    const offsetY = event.clientY - windowProperties.position.y;
    
    setMouseOffset({ x: offsetX, y: offsetY });
    setIsDragging(true); // Start dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const appDiv = document.getElementById('app');
    const appWidth = appDiv.offsetWidth;
    const appHeight = appDiv.offsetHeight;
  
    const cardWidth = windowProperties.windowSize.width;
    const cardHeight = windowProperties.windowSize.height;
  
    // Calculate the new position based on the mouse movement
    let newX = e.clientX - mouseOffset.x;
    let newY = e.clientY - mouseOffset.y;
  
    // Ensure the card doesn't move out of the app div horizontally
    if (newX < 0) newX = 0; // Prevent moving past the left edge
    if (newX + cardWidth > appWidth) newX = appWidth - cardWidth; // Prevent moving past the right edge
  
    // Ensure the card doesn't move out of the app div vertically
    if (newY < 0) newY = 0; // Prevent moving past the top edge
    if (newY + cardHeight > appHeight) newY = appHeight - cardHeight; // Prevent moving past the bottom edge
  
    // Update window position
    setwindowProperties((prevProps) => ({
      ...prevProps,
      position: {
        x: newX,
        y: newY,
      },
    }));
  };

  return (
    <div id='card' 
         className='absolute rounded-2xl'
         style={{
            width: `${windowProperties.windowSize.width}px`,
            height: `${windowProperties.windowSize.height}px`,
            left: `${windowProperties.position.x}px`,
            top: `${windowProperties.position.y}px`
          }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseMove}
          >
      <div id='card-header'
           className='h-[6%] bg-gray-200 rounded-t-2xl cursor-move'
           onMouseDown={handleMouseDown}
           ></div>
      <div id='card-body rounded-b-2xl'
            className='h-[94%]'>
        <textarea className='w-full h-full rounded-b-2xl p-2' 
                  value={note}
                  onChange={handleChange}></textarea>
      </div>
    </div>
  )
}

export default NoteEditor;
