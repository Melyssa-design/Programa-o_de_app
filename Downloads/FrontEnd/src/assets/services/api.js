import axios from "axios";

// Configuração da instância do Axios para comunicação com a API
const api = axios.create ({
    baseURL: "http://localhost:3000",
});

export default api;