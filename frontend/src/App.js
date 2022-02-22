import React from "react";
import { useState} from "react";
import {FilterSlider} from "./FilterSlider";
const App = () => {

  let initValue = 0
  let initDistance = 0

  const [value, setValue] = useState(initValue);
  const [distance, setDistance] = useState(initDistance);
  const handleChange = event =>{
  
      setValue(event.target.value)
      console.log(value)
    
  }


  const handleChangeDistance = event =>{
  
    setValue(event.target.value)
    console.log(value)
  
}
  
  return (
    <>
      <div className="App">
        
        <FilterSlider
        
          initValue = {0}
          minValue = {-100}
          maxValue = {100}
          handleChange = {handleChange}
          />

        <FilterSlider
        
        initValue = {0}
        minValue = {-100}
        maxValue = {100}
        handleChange = {handleChangeDistance}
        />

          
        
      </div>
    </>
  );
};

export default App;