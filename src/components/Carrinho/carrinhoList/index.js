import {useContext} from 'react';
import {CartContext} from "../../../assets/context/cartContext";
import { AsideCart2 } from './style';


export default function CartList({img,title,price,id}) {
const [cart,setCart]=useContext(CartContext);

function onDelete (id){
  setCart(cart.filter(
    item=>item.id !== id
  ))
};

  return (
      <AsideCart2>
        <div className="contImg"><img src={img} alt="blusas" width={94}  height={94}/></div>
        <div className="contInfos">
          <p id="title">{title}</p>
          <p id="price"><span>R$</span>{price}</p>
          <button type='button' onClick={()=>onDelete(id)}>Remover</button>
        </div>
      </AsideCart2>
  
  )
}
