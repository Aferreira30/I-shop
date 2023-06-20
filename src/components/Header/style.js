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
    img{
      background: transparent;
    }
}
`;