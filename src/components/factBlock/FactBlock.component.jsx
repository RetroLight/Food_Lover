import React from "react";
import {BlockContainer, ImageBlock, InfoBlock} from './factBlock.styles';


const FactBlock = ({imgUrl, factHeading, factTxt}) => {
    return(
        <BlockContainer>
            <ImageBlock imgUrl={imgUrl}/>
            <InfoBlock>
                <h3>{factHeading}</h3>
                <p>{factTxt}</p>
            </InfoBlock>
        </BlockContainer>
    )
};

export default FactBlock;
