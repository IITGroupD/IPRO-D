import React from "react";
import './FilterSlider.css'
// need to import the component of listing
const FilterSlider = ({initValue, minValue, maxValue, handleChange}) => {
    return (
        <>
            {minValue}
            <input
            type = "range"
            className = "slider"
            default = {initValue}
            min = {minValue}
            max = {maxValue}
            //need to add value = {listing value} here
            onMouseUp = {handleChange}/>
            {maxValue}

        </>
    );
};

export default FilterSlider;
