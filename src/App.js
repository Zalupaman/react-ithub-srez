import { useEffect, useState } from 'react';
import './App.css';
import Color from './components/Color.js'

// с неймингом не заморачивался 

function App() {
  const [Bgcolors, setColor] = useState([])
  useEffect(()=>{
    function componentToHex(c) {
      let hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let colors = []
    for (let index = 0; index <= 11; index++) {
      
      let r = Math.floor(Math.random() * (255 - 0)) + 0
      let g = Math.floor(Math.random() * (255 - 0)) + 0
      let b = Math.floor(Math.random() * (255 - 0)) + 0
      let colorHEX = rgbToHex(r,g,b)
      colors.push(colorHEX)
     
    }
    setColor(colors)
    console.log(colors)
  },[]) // уберите пустой массив и будет дискотека <3
  return (
    <div className="App">
      {Bgcolors.map( (color) => (
        <Color color={color} />
      ))}
      
    </div>
  );
}

export default App;
