import React, { useState } from "react";

import IceCreamWrapper from "./components/IceCreamWrapper";
import Colors from "./components/colors";
import { colorsDefault } from "./initialData";
import Moods from "./components/moods/Moods";

import "./App.css";

function App() {
  const [colors, setColors] = useState(colorsDefault);

  

  const selectColor = (colorId) => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        isSelected: color.id === colorId
      };
    });

    setColors(newColors);
  };

  const selectedColor = colors.find(({ isSelected }) => isSelected === true).id;
  
  return (
    <div className="App">
      <IceCreamWrapper color={selectedColor} />
      <Colors items={colors} action={selectColor} />
      <Moods />
    </div>
  );
}

export default App;
