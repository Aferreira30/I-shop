import { ThemeProvider } from "styled-components";

import {Container} from "./style";

import _default from "../assets/styles/themes/default";
import GlobalStyles from "../assets/styles/globalStyles";

import Header from "../components/Header";
import Routers from "../Routers/router";

import { CartProvider } from "../assets/context/cartContext";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider theme={_default}>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyles />
              <Container>
                  <Header />
                  <Routers />
              </Container>
        </CartProvider>
     </BrowserRouter>
    </ThemeProvider>
  );
}


