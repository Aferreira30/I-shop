import { useContext} from 'react'
import {CartContext} from "../../../assets/context/cartContext";
import { Container} from './style';

import cesta from "../../../assets/images/icons/cestaCompras.svg"

export default function ProdutosGerais({id,img,title,price}) {
  const [cart,setCart,focus,setFocus]=useContext(CartContext);
  const number = price;
  const num = parseFloat(number);
  const addProduct = (e)=>{
    e.preventDefault();
    const blusas = {
      img:img, title:title, price:num, id:title + Date.now()
    }
    console.log(blusas.id)
  setCart([...cart, blusas])
  };
  const handleFocus = ()=>{
    setFocus(!focus)
  }
  const ativeFocus = focus.toString();
  console.log(focus);

  
  return (
    <>
    <Container ative={ativeFocus} >
  
      <div className="contImg">
      <img src={img} alt={title} id='blusa'/ >
      </div>
    
      <div className="contInfos" onClick={handleFocus}>
        <div className="contTextos">
        <h2>{title}</h2>
        <p>
          <span>R$</span>
          { price  }
        </p>
        </div>
        <button type='submit' onClick={addProduct}> 
        <img src={cesta} alt="Cesta compras" />
        </button>
      </div> 
    </Container>
    </>
  )
}
