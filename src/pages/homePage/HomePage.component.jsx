import React from 'react';
import {useEffect, useState} from "react";
import {InputContainer, Form, MainHeading, RecipesPageLink, ContentHeading,  HomePageContent} from "./homePage.styles";

import {connect} from "react-redux";
import {updateFactsStart} from "../../redux/facts/facts.actions";
import {updateRecipesStart} from "../../redux/recipes/recipes.actions";

import CustomInput from "../../components/input/CustomInput.component";
import CustomButton from "../../components/button/CustomBtn.component";
import FactBlock from "../../components/factBlock/FactBlock.component";

const HomePage = ({factsCollection, fetchFactsStart, fetchRecipesStart}) => {
    const [query, setQuary] = useState('');

    useEffect(() => {
        fetchFactsStart()
    },[])

    const onQueryChange = (event) => {
        setQuary(event.target.value);
    }

    const searchHandler = async () => {
        await fetchRecipesStart(query)
    }

    return (
        <div className='homePage'>
            <MainHeading>Что хотите приготовить?</MainHeading>
            <Form>
                <InputContainer>
                    <CustomInput handleChange={onQueryChange} type='search'/>
                </InputContainer>
                <RecipesPageLink to={`recipes/${query}`}>
                    <CustomButton btnLabel='Поиск' ml={10} onClick={searchHandler}/>
                </RecipesPageLink>
            </Form>
            <HomePageContent>
                <ContentHeading>Интересные факты</ContentHeading>
                <div>
                    {
                        factsCollection.map(item => <FactBlock
                            key={item.id}
                            imgUrl={item.factImg}
                            factHeading={item.factHeading}
                            factTxt={item.factInfo}/>)
                    }
                </div>
            </HomePageContent>
        </div>
    )
};

const mapStateToProps = (state) => ({
    factsCollection: state.factsRed.factsCollection
})

const mapDispatchToProps = dispatch => ({
    fetchFactsStart: () => dispatch(updateFactsStart()),
    fetchRecipesStart: recipeQuery => dispatch(updateRecipesStart(recipeQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
