import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 130px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;

button{
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme})=>theme.colors.base.element};
  position: relative;
    img{
      background: transparent;
    }
    span{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      padding: 12px ;
      background: ${({theme})=>theme.colors.produto.principal};
      display: ${({cartnum}) => cartnum > 0 ? "flex" :  "none"};
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 20px 16px;
      text-align: center;
      position: absolute;
      top: -10px;
      right: -5px;
    }
}
`;