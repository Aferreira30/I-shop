import {createContext,useState} from "react";

export const CartContext = createContext();

export function CartProvider({children}){
  const [cart,setCart]=useState([]);
  const [close, setClose]=useState(false)
  const [focus,setFocus] = useState(false);
  const [data,setData] = useState([]);


  const handleClose = ()=>{
     setClose(!close)
  }

  return(
    <CartContext.Provider value={[cart,setCart,close,setClose,handleClose,focus,setFocus,data,setData]}>
      {children}
    </CartContext.Provider>
  )
}
