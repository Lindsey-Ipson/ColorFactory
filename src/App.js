import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import ColorPicker from "./ColorPicker";
import {v1 as uuid} from "uuid";
import './App.css';

function App() {
  const INITIAL_STATE = [{'name': 'red', 'hexColor': '#FF0000', id: uuid()}, {'name': 'green', 'hexColor': '#00FF00', id: uuid()}, {'name': 'blue', 'hexColor': '#0000FF', id: uuid()}];
  const [colors, setColors] = useState(INITIAL_STATE);

  const addColor = (newColor) => {
    if (colors.find(color => color.name === newColor.name)) {
      alert('Color already exists');
      return;
    }
    setColors(colors => [...colors, { ...newColor, id: uuid() }]);
  }

  const getColor = (colorName) => {
    return colors.find(color => color.name === colorName);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors/:colorName" element={<Color getColor={getColor} />} />
          <Route path="/colors" element={<ColorList colors={colors}/>} />
          <Route path="/colors/new" element={<ColorPicker addColor={addColor}/>} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* // <div className="App">
    //   <h1> Welcome to the Color Factory </h1>
    //   <Link to={`/colors/new`}>Add new color</Link>
    //   <ColorList /> */}
