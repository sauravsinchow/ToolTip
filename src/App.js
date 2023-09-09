import React from 'react';
import Tippy from '@tippy.js/react'
import './App.css';
import 'tippy.js/dist/tippy.css'
function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: '20px' }}>
      <Tippy content= 'Basic Tooltip'>
      <button>Hover</button>
      </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
      <Tippy content= {<span style ={{ color: 'orange' }}>Colored</span>}>
      <button>Hover</button>
      </Tippy>
      </div>
      
    </div>
  );
}

export default App;
