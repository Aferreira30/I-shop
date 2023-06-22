import  styled from "styled-components";

export const Container = styled.div`
width: 1440px;
height: 900px;
margin: 0 auto;
background: ${({theme})=>theme.colors.base.background};
position: relative;
`;