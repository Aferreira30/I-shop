import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:  Roboto,  sans-serif;
  line-height: 160%;
  background: ${({theme})=>theme.colors.base.background};
  color: ${({theme})=>theme.colors.base.title};
}
button{
  cursor: pointer;
}

`;