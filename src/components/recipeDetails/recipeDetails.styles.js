import styled from "styled-components";

export const RecipeDetailsContainer = styled.div`
  width: 70%;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  padding: 10px;
`

export const ImageContainer = styled.div`
  width: 70%;
  height: 400px;
  margin: 0 auto;
  margin-top: 20px;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const ItemDataContainer = styled.div`
  text-align: left;
  margin-top: 20px;
  line-height: 40px;
  font-size: 18px;
  & > .recipeLinkContainer {
    width: 277px;
    height: 50px;
    margin: 20px auto 40px auto;
    display: block;
  }
  & > .cookingTime {
    text-align: center;
  }
`
