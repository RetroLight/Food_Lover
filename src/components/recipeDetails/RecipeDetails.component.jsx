import React from "react";
import CustomButton from "../button/CustomBtn.component";
import ItemNutritionBlock from "../itemNutritionBlock/ItemNutritionBlock.component";
import {ImageContainer, ItemDataContainer, ItemImage, RecipeDetailsContainer} from "./recipeDetails.styles";

const RecipeDetailsItem = ({item}) => {
    const {totalNutrients, totalDaily} = item
    return (
        <RecipeDetailsContainer>
            <h3>{item.label}</h3>
            <ImageContainer>
                <img src={item.images.LARGE.url}/>
            </ImageContainer>
            <ItemDataContainer>
                <div className='ingredientsBlock'>
                    {
                        item.ingredientLines.map(ingredient => <div>
                            <ul>
                                <li>{ingredient}</li>
                            </ul>
                        </div>)
                    }
                </div>
                <div className='cookingTime'>
                    Примерное время готовки {item.totalTime} мин.
                </div>
                <a className='recipeLinkContainer' href={item.url} target='_blank'>
                    <CustomButton btnLabel='Инструкция по приготовлению'/>
                </a>
            </ItemDataContainer>
            <ItemNutritionBlock totalNutrients={totalNutrients} totalDaily={totalDaily}/>
        </RecipeDetailsContainer>
    )
};

export default RecipeDetailsItem;
