
// Componente para adicionar um novo produto à lista
import React, { useState } from 'react';
import './styles.css';

const AdicionarProduto = ({ onAdd }) => {
    const [texto, setTexto] = useState('');

    const enviar = (e) => {
        // Previne o comportamento padrão do formulário
        // que é recarregar a página
        e.preventDefault();
        // Adicionar o produto se o texto não estiver vazio
        if (texto.trim()) {
            // chama a função onAdd passada via props
            // Props são os parâmetros que um componente recebe
            onAdd(texto); // Missing parentheses to call the function
            // Limpa o campo de texto
            setTexto('');
        }
    };

    return (
        // Formulário para adicionar um novo produto
        <form className="form" onSubmit={enviar}>
            <input
                type="text"
                placeholder="Adicionar produto..."
                volue={texto}
                onChange={(e) => setTexto(e.target.value)}
                />
                <button type="submit">Adicionar</button>
        </form>
    );
}

export default AdicionarProduto;