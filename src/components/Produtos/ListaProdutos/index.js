import { useRef, useState,useEffect} from 'react'

import { Container,ProdutosUL } from './style'

import seta from "../../../assets/images/icons/seta.svg";

import ProdutosGerais from '../Produtos';


export default function Produtos() {
  const slider = useRef(null);
  
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/static/produtos.json').then((response)=>response.json()).then(setData);
  },[])
  

  const handleLeft = (e)=>{
     e.preventDefault();
      slider.current.scrollLeft -= slider.current.offsetWidth;
  }
  const handleRight = (e)=>{
    e.preventDefault();
    slider.current.scrollLeft += slider.current.offsetWidth;
}

  return (
    <Container>
                <div className="btns">
                  <button type='button' onClick={handleLeft} id='esquerda'>
                    <img src={seta} alt="seta" />
                  </button>
                  <button type='button' onClick={handleRight} id='direita'>
                  <img src={seta} alt="seta" />
                  </button>
                </div>
        <ProdutosUL ref={slider} id='slider'>
          {
              data.map(({id,img,title,price},index)=> (
                <li  className='sliderPoint'> 
                  <ProdutosGerais 
                      key={id}
                      img={img}
                      title={title}
                      price={price}
                      index={index}
                  />
                </li>
            )
            )
          }
      </ProdutosUL>
    </Container>
  )
}
