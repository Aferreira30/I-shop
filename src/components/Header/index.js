import React from 'react'
import { Container } from './style'

import logotipo from "../../assets/images/Logo.svg";
import cesta from "../../assets/images/icons/cestaCompras.svg";
export default function Header() {
  return (
    <Container>
      <img src={logotipo} alt="LogoTipo" width={129} height={52}/>
      <button type='button'>
        <img src={cesta} alt="Carrinho de Compras" />
      </button>
    </Container>
  )
}
