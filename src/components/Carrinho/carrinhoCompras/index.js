import {useContext} from 'react';
import {CartContext} from "../../../assets/context/cartContext";

import { Container,AsideCart } from './style';

import CartList from '../carrinhoList';
import fechar from "../../../assets/images/icons/fechar.svg";
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart,setCart,close,setClose,handleClose] = useContext(CartContext);

  const totalPrice = cart.reduce(
    (accumulator, currentValue)=>accumulator + currentValue.price, 0
    );
  const totalPriceNumber = totalPrice
  const totalPriceConvertido = parseFloat(totalPriceNumber)

  const string = close.toString();

  return (
    <Container toggleview={string}>
      <img src={fechar} alt="fechar"  id='fechar' onClick={handleClose} width={24} height={24} />
      <h2>Sacola de compras</h2>
      <AsideCart>
        <div className="contAsideCart">
        <div className="contCartBuy">
        {
            cart.length > 0 ?
                cart.map(
                  item=><CartList  img={item.img} title={item.title} price={item.price} id={item.id} key={item.id}/>  
                  )
              : 
              null
      }
        </div>
        </div>
      </AsideCart>
        <div className="contTxtNum">
          <p id='qnt'>Quantidade</p>
          <p id='itens'>itens</p>
          <p id='valor'>valor total</p>
          <p><span>R$</span>{totalPriceConvertido.toFixed(2)}</p>
        </div>
        <Link to="/paysucess" className='Link'><button> Finalizar Compra</button></Link>
    </Container>
  )
}
