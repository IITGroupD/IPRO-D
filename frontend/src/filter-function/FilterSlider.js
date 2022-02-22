import React, { useState} from "react";
// need to import the component of listing
const FilterSlider = ({
    initValue = 0,
    minValue = -100,
    maxValue = 100,
    handleChange = handleChange
}) => {

   
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

export { FilterSlider};