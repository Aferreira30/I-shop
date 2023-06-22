import { Container } from './style';

import logotipo from "../../assets/images/Logo.svg";
import cesta from "../../assets/images/icons/cestaCompras.svg";

import { useContext } from 'react';
import { CartContext } from '../../assets/context/cartContext';

export default function Header() {
const [cart,setCart,close,setClose] = useContext(CartContext);

const handleOnOpen = () =>{
  setClose(!close)
}
const numbers = cart.length;

 return (
    <Container  cartnum={numbers}>
      <img src={logotipo} alt="LogoTipo" width={129} height={52} />
      <button type='button' onClick={handleOnOpen}>
        <img src={cesta} alt="Carrinho de Compras" />
        <span>{cart.length}</span>
      </button>
    </Container>
  )
}
