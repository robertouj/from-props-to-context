import React, { useState } from "react";

import IceCreamWrapper from "./components/IceCreamWrapper";
import Colors from "./components/colors";
import { colorsDefault, moodsDefault } from "./initialData";
import Moods from "./components/Moods";

import "./App.css";

function App() {
  const [colors, setColors] = useState(colorsDefault);
  const [moods, setMoods] = useState(moodsDefault);

  const selectColor = (colorId) => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        isSelected: color.id === colorId
      };
    });

    setColors(newColors);
  };

  const selectMood = (moodId) => {
    const newMoods = moods.map((mood) => {
      return {
        ...mood,
        isSelected: mood.id === moodId
      };
    });

    setMoods(newMoods);
  };

  const selectedColor = colors.find(({ isSelected }) => isSelected === true).id;
  const selectedMood = moods.find(({ isSelected }) => isSelected === true).id;
  
  return (
    <div className="App">
      <IceCreamWrapper color={selectedColor} mood={selectedMood} />
      <Colors items={colors} action={selectColor} />
      <Moods items={moods} action={selectMood} />
    </div>
  );
}

export default App;
