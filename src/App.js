import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';

const App = () => {

  const[buttonPopup,setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h2>Popup</h2>
        <br />

        <button onClick={() => setButtonPopup(true)}>Open Popup</button>

        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
          
          
        </Popup>
      </main>
    </div>
  )
}

export default App
