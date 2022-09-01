import React from "react";
import {RecipeDetailsContainer} from "./recipeDetailsPage.styles";
import RecipeDetailsItem from "../../components/recipeDetails/RecipeDetails.component";
import {connect} from "react-redux";


const RecipeDetailsPage = ({currentItem}) => {
    return (
        <RecipeDetailsContainer>
            <RecipeDetailsItem item={currentItem}/>
        </RecipeDetailsContainer>
    )
}

export const mapStateToProps = (state) => ({
    currentItem: state.recipesRed.currentRecipe.recipe
});

 export default connect(mapStateToProps)(RecipeDetailsPage);
