import React, {useState} from 'react'
import './App.css'

function App() {
  const [showHelloText, setShowHelloText] = useState(false)

  const handleButtonPress = (t) => {
    setShowHelloText(true)
  }

  return (
    <div>
      {showHelloText ? (
        <p>hello world!</p>
      ) : (<button onClick={handleButtonPress}>click me!</button>
      )}
    </div>
    
  );
}

export default App;
