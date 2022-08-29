import styled from "styled-components";
import {Link} from "react-router-dom";

export const InputContainer = styled.div`
  width: 30%;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
`

export const MainHeading = styled.span`
  font-size: 22px;
  color: #000;
  font-family: Chilanka;
`

export const RecipesPageLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`

export const ContentHeading = styled.h2`
  font-family: Chilanka;
  margin-bottom: 20px;
  margin-top: 40px;
`

export const HomePageContent = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1400px;
  width: 90%;
  & > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
