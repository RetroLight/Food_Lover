import React from "react";
import {ButtonStyles} from "./customBtn.styles";

const CustomButton = ({onSubmit, btnLabel, ...props}) => {
    return(
        <ButtonStyles onClick={onSubmit} {...props}>
            <span>{btnLabel}</span>
        </ButtonStyles>
    )
};

export default CustomButton;
