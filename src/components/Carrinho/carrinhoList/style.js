import { styled } from "styled-components";

export const AsideCart2 = styled.aside`
width:100%;
height: auto;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 23.58px;
margin-top: 23px;
background: transparent;

.contImg{
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
border-radius: 6px;

}
#title{
  font-size:${({theme})=>theme.size.p}px;
  font-weight: 400;
  line-height: 28.8px;
}
#price{
  font-size:${({theme})=>theme.size.p}px;
  font-weight: 700;
  line-height: 28.8px;
}
button{
  width: 65px;
  height: 26px;
  border: none;
  background-color: transparent;
  color: ${({theme})=>theme.colors.produto.principal};
  font-weight: bold;
  font-size: 16px;
}
`;