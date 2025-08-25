import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/images/logo-computer.png';

import AdicionarProduto from './componentes/Adicionarproduto';
import ListaDeProdutos from './componentes/ListarProdutos';

function App() {
   // Cria uma variavel e um setter (forma de adicionar dados) para o usuario.
  const [produtos , setProdutos] = useState(['Mouse', 'Teclado', 'Monitor', 'Gabinete']);
   

  // Função para verificar se o usuário já existe e adicioná-lo à lista.
  const adicionarUsuario = (nome) => {
    const produto = nome.trim();

  // Se o usuário já existir, exibe um alerta.
    if (produtos.includes(produto)) {
      alert('O produto já existe!');
      return;
    }

    // Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
    // Adiciona todos os usuários já existentes e o novo usuário.
    setProdutos([ ... produtos, produto]);

};

  return (
    // Estrutura da aplicação
    <div className="App">
    <img src = {logo} className="logo" alt="logo Computador" />
     <h1>Produtos de Informática</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      <hr />
      <h2>Lista de Produtos</h2>
     <ListaDeProdutos itens={produtos} />
  </div>
 );

}

export default App;