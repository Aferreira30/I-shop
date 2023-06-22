import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
gap: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 60px;
text-align: center;
p{
  width: 520px;
  height: 174px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 160%;
}
.contTxts{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;

h1{
  font-size:32px;
  font-weight:bold;
}
p{
  font-size:24px;
  font-weight:300;
  line-height: 140%;
}
#link{
  p{
    font-weight: bold;
    color:${({theme})=>theme.colors.produto.principal}
  }
}
}

`;