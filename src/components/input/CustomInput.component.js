import React from "react";
import {FormInput} from './customInput.styles';

const CustomInput = ({handleChange, label, type, ...inputProps}) => {
    return (
        <FormInput onChange={handleChange} type={type}/>
    )
};

export default CustomInput;
