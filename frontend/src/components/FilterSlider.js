import React from "react";
import './FilterSlider.css'
import useState from 'react';
// need to import the component of listing
const FilterSlider = ({initValue, minValue, maxValue, handleChange}) => {
    
    
    return (
        <div>
            {minValue+' '}
            <input
            type = "range"
            className = "slider"

            defaultValue = {initValue}
            min = {minValue}
            max = {maxValue}
            
            onMouseUp = {handleChange}/>
            {' '+ maxValue}

            
            
        </div>
    );
};

export default FilterSlider;
