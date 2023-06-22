import { styled } from "styled-components";

export const Container = styled.div`
width: 480px;
height: 900px;
margin: 0 auto;
display:${({toggleview}) => toggleview === 'true' ? "flex" : "none"};
flex-direction: column;
padding: 16px;
background: ${({theme})=>theme.colors.base.element};
justify-content: center;
position: absolute;
top: 0;
right: 0;
border-radius: 6px;

h2{
background: ${({theme})=>theme.colors.base.element};
width: 384px;
margin: 0 auto;
}
.contTxtNum{
  width: 384px;
  margin: 0 auto;
background: transparent;
 display :grid;
 grid-template-columns: 1fr 1fr;
 gap:4px;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 10px;
 p{
  background: transparent;
 }
}
.Link{
  align-self: center;
  button{
    width: 384px;
    height: 69px;
    padding:20px, 32px, 20px, 32px;
    border-radius: 8px;
    color: #ffff;
    background: ${({theme})=>theme.colors.produto.principal};
    align-self: center;
  }
}

aside::-webkit-scrollbar{
  display: none;

}

#fechar{
  cursor: pointer;
}
#fechar:hover{
  cursor: pointer;
  width: 30px;
  transition: .2s all;
}
`;


export const  AsideCart= styled.aside`
width: 90%;
height: 90%;
margin: 0 auto;
background: ${({theme})=>theme.colors.base.element};
margin-bottom: 10px;
overflow-y: auto;
`;