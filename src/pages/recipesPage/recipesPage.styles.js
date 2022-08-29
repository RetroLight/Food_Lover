import styled from "styled-components";

export const RecipesContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > .title {
    margin-bottom: 23px;
    text-align: center;
    font-size: 24px;
    width: 100%;
  }
`

export const RecipesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 335px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  justify-content: center;
`
