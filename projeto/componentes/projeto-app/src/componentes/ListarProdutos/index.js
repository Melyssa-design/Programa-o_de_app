
//  Componente que exibe uma lista ordenada de produtos
import ReaCT from 'react';
import './styles.css';

const ListaDeProdutos = ({ itens = [] }) => {
    return (
        // Lista ordenada de produtos
        <ol className="LIsta-Produtos">
            {itens.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    );
}

export default ListaDeProdutos;