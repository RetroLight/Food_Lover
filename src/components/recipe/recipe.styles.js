import styled from "styled-components";



export const RecipeContainer = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  cursor: pointer;
`
export const ImgContainer = styled.div`
  & > img {
    width: 100%;
  }
`

export const RecipeTitle = styled.div`
  height: 40px;
  max-height: 40px;
  text-align: center;
  font-weight: bolder;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const InfoContainer = styled.div`
  padding: 10px;
  font-size: 16px;
  & > * {
    text-align: left;
  }
`
