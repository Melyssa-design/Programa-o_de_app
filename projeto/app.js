import './ListaDeCompras.css';

import React, { useState } from 'react';
import './App.css';

function App() {
const [produto, setProduto] = useState('');
const [lista, setLista] = useState(['Arroz, Lentilha, Banana']);

const adicionarProduto = () => {
if (lista.includes(produto)) {
alert('Produto já existente na lista.');
    return;
  }
}
    return (
      <div className="App" >
      <h1> Lista de compras</h1>
      <hr/>
      <h1>Adicionar produto</h1>
      <input
      type="text"
      volue={Produto}
      onChange={(e) => setproduto(e.targe.volue)}
      palceholder="Digite o nome do produto "
      />
      <button Onclick={adicionarProduto}>Adicionar</button>
      <hr/>
      <h2>Listas de Produtos</h2>
      <ol>
        {lista.map((produto, index) => (
         <li key={{index}>{produto}}></li>
         ))}
      </ol>
  </div>
    
);

}