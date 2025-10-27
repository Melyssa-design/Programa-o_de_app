// FrontEnd\src\componentes\Header\index.jsx

import { link } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <header className="header - container">
            <div>Gerenciamento de Usuários!</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;