import styled from "styled-components";

export const ButtonStyles = styled.div`
  margin-left: ${({ml}) => `${ml}px`};  
  margin-right: ${({mt}) => `${mt}px`};  
  margin-top: ${({mt}) => `${mt}px`};  
  margin-bottom: ${({mb}) => `${mb}px`};  
  box-sizing: border-box;
  border-radius: 10px;
  background: #07bff7;
  padding: 2px 12px;
  color: #fff;
  text-align: center;
  line-height: 16px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: #07aff7;
  }

  &:active {
    background: #0793f7;
  }
`
