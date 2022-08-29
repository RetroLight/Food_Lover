import React from 'react';
import {ImgContainer, InfoContainer, RecipeContainer, RecipeTitle} from "./recipe.styles";

const RecipeItem = (props) => {
    const {recipeTitle, recipeImage, cals, cuisineType, cookingTime, ingredientsNum} = props;
    return(
        <RecipeContainer>
            <RecipeTitle>{recipeTitle}</RecipeTitle>
            <ImgContainer>
                <img src={recipeImage}/>
            </ImgContainer>
            <InfoContainer>
                <div>
                    <div className='calories'>Каллории: {cals.toFixed(2)}</div>
                    <div className='cuisineType'>Кухня: {[...cuisineType]}</div>
                </div>
                <div>
                    <div className='cookingTime'>Время готовки: {cookingTime} мин</div>
                    <div className='ingredientsNum'>Кол-во ингридиентов: {ingredientsNum} шт.</div>
                </div>
            </InfoContainer>
        </RecipeContainer>
    )
};

export default RecipeItem;
