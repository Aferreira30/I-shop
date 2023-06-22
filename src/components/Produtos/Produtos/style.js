import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center ;
border-radius:6px;

.contImg{
  align-self: center;
  width: 696px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.contInfos{
  display: ${({ative})=>ative===true? "flex" : "flex"};
  align-items: center;
  justify-content: space-between;
  width: 688px;
  height: 110px;
  padding: 20px 32px 20px 20px;
  border-radius:6px;
  margin-top: 40px;
  background: ${({theme})=>theme.colors.base.element};
            .contTextos{
              text-decoration: none;
              width:252px;
              height: 70px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background: ${({theme})=>theme.colors.base.element};       
              h2{
              background: ${({theme})=>theme.colors.base.element};       
              font-size:${({theme})=>theme.size.m}px; 
              font-weight: 700;
              
              }
              p{
              background: ${({theme})=>theme.colors.base.element};       
              color:${({theme})=>theme.colors.produto.light}; 
              font-weight:${({theme})=>theme.weight.bold}; 
              font-size:${({theme})=>theme.size.gM}px; 

                  span{
                     background: ${({theme})=>theme.colors.base.element};       
                     color:${({theme})=>theme.colors.produto.light}; 
                    font-weight:${({theme})=>theme.weight.bold}; 
                    font-size:${({theme})=>theme.size.gM}px; 

                  }
              }
            }
            button{
              width:56px;
              height: 56px;
              padding: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 6px;
              border: none;
              background: ${({theme})=>theme.colors.produto.light};

              img{
                background: transparent;
              }
            }
}

`;
