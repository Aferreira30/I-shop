import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 656px;
margin: 0 auto;
position: relative;
#slider::-webkit-scrollbar{
  display: none;
  transition: .5s ease-in;
}
.btns{
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
position: absolute;
top: 45%;
left: 0;
button{
  border: none;
  background: transparent;
  img{
  background: transparent;
  }
}
button:hover{
  width:42px;
  height: 42px;
  transition: 0.5s ease-in;
}

  #esquerda{
    img{
      transform: rotate(180deg);
    }
  }
}
`;

export const ProdutosUL = styled.ul`
width: 100%;
height: 656px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: start;
gap: 48px;
list-style:none;
overflow-x: auto;
scroll-behavior: smooth;
li{
  width: 688px;
  cursor: pointer;
}
.sliderPoint{
  width: 696px;
  height: 656px;
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius:8px;
  padding:12px ;

  #blusa{
    background:transparent;
    margin-top: 88px;
  }
 }
 :-webkit-scrollbar{
  display: none;
 }
`;
