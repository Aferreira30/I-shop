import {useContext} from 'react'
import {CartContext} from "../../../assets/context/cartContext";

import { Container } from './style';

import cesta from "../../../assets/images/icons/cestaCompras.svg"

export default function ProdutosGerais({id,img,title,price}) {
  const [cart,setCart]=useContext(CartContext);

const addProduct = (e)=>{
  e.preventDefault();
  const blusas = {
    img:img, title:title, price:price, id:title + Date.now()
  }
  console.log(blusas.id)
setCart([...cart, blusas])
};
const addVazio = (e)=>{
  e.preventDefault();
  const blusas = {
    title:"Ops! não há Produtos", price:0, id: title + Date.now()
  }
  console.log(blusas.id)
  setCart([...cart, blusas])
}

  return (
    <Container>
      <img src={img} alt={title} id='blusa'/ >
      <div className="contInfos">
        <div className="contTextos">
        <h2>{title}</h2>
        <p>
          <span>R$</span>
          {price}
        </p>
        </div>
        <button type='submit' onClick={()=>{
            return cart.length === 0 ? addVazio : addProduct
        }}> 
        <img src={cesta} alt="Cesta compras" />
        </button>
      </div>
    </Container>
  )
}
