import { Conatiner } from './style'

import Produtos from '../../components/Produtos/ListaProdutos'
import Cart from '../../components/Carrinho/carrinhoCompras'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Link to="/">
    <Conatiner>
      <Produtos />
      <Cart />
    </Conatiner>
    </Link>
  )
}
