import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

export default function Questao2_3() {
  const [produtos, setProdutos] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    listarProdutos();
  }, []);

  function listarProdutos() {
    const produtos = new Array(100).fill().map((value, index) => ({
      id: index,
      nome: faker.commerce.productName(),
    }));
    setProdutos(produtos);
  }

  function filtrarNomes() {
    if(filter) {
      const novaListaProdutos = produtos.filter((item) => item.nome.startsWith(filter));
      return novaListaProdutos;
    } else {
      return produtos;
    }
  }

  return (
    <div>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='text'
        placeholder='Pesquisar nome do produto'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      { 
        filtrarNomes().map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))
      } 
    </div>
  )
}
