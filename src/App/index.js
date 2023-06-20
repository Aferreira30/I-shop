import { ThemeProvider } from "styled-components";

import {Container} from "./style";

import _default from "../assets/styles/themes/default";
import GlobalStyles from "../assets/styles/globalStyles";

import Header from "../components/Header";

import Produtos from "../components/Produtos/ListaProdutos";

import { CartProvider } from "../assets/context/cartContext";

export default function App() {
  return (
    <ThemeProvider theme={_default}>
      <CartProvider>
        <GlobalStyles />
          <Container>
          <Header />
          <Produtos />
          </Container>
      </CartProvider>
    </ThemeProvider>
  );
}


