import React from 'react'
import './Filter.css'
import FilterSlider from './FilterSlider';

export default function Filter(props){
    const { handleChange, handleChangeDistance } = props
    return(
        <div className="filter">
            <div>
            Price
            <FilterSlider 
                initValue = {100}
                minValue = {0}
                maxValue = {100}
                handleChange = {handleChange}
                />
            </div>
            <div>
            Distance
            <FilterSlider 
                initValue = {100}
                minValue = {0}
                maxValue = {100}
                handleChange = {handleChangeDistance}
            />
            </div>
        </div>
    );
}
