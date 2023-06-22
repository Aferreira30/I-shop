import {Container} from"./style";
import { useContext } from "react";
import {CartContext} from "../../assets/context/cartContext";
import { Link } from "react-router-dom";

import blusas from "../../assets/images/blusas.svg";

export default function PayPage() {
  const [cart,setCart]=useContext(CartContext);
  return (
    <Container>
      {
        cart.length > 0
         ?      
          <img src={blusas} alt="blusas" width={562} height={220} /> 
          :
          null
      }

      <div className="contTxts">
        <h1>Compra Efetivada</h1>
        <p>Uhuuul!! sua compra de {cart.length} camisetas já está a caminho de sua casa</p>
        <Link to="/" id="link">
          <p>Voltar ao catálogo</p>
        </Link>
      </div>
    
    </Container>
  )
}

