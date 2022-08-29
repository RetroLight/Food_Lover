import styled from "styled-components";


export const BlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 2px solid #bdbdbd;
  border-radius: 10px;
  flex-basis: 48%;
  margin-bottom: 14px;
  min-height: 350px;
`

export const ImageBlock = styled.img`
  background: ${({imgUrl}) => `url(${imgUrl})`};
  background-position: center;
  background-size: cover;
  width: 49%;
  height: 100%;
`
export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  h3 {
    font-weight: bolder;
    font-size: 18px;
    color: #444444;
  };
  p {
    margin-top: 8px;
    font-size: 18px;
    color: #444444;
    text-align: left;
  }
`
