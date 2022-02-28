import React from 'react'
import './Filter.css'
import FilterSlider from './FilterSlider';
export default function Filter(props){
    const { handleChange, handleChangeDistance } = props
    return(
        <div className="filter">
            <FilterSlider 
                initValue = {100}
                minValue = {0}
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
    );
}
