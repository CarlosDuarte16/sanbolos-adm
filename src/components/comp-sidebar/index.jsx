import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [consulUsuario, setConsulUsuario] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a barra lateral

  async function usuario() {
    try {
      const url = 'http://4.172.207.208:5012/consultarUsuario/';
      let resp = await axios.get(url);
      setConsulUsuario(resp.data);
    } catch (error) {
      console.error("Erro ao consultar usuário:", error);
    }
  }

  useEffect(() => {
    usuario();
  }, []);

  function sair() {
    localStorage.setItem('USUARIO', null);
    navigate('/');
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('USUARIO');
    setToken(storedToken);

    if (!storedToken || storedToken === 'null') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>

      <div className={`comp-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-name">
          <img src="assets/image/logo.png" alt="Logo" />
          <h1>SanBolos</h1>
        </div>

        <div className="profile">
          <img src="assets/image/person.png" alt="Perfil" />
          {consulUsuario.length > 0 ? (
            consulUsuario.map((item, index) => (
              <div key={index}>
                <h3>{item.nome}</h3>
              </div>
            ))
          ) : (
            <h3>Carregando...</h3>
          )}
        </div>

        <div className="options-page">
          <Link className="link-img" to="/products">
            <div className="div-link">
              <img src="/assets/image/cupcake.png" alt="Meus Produtos" />
              <h4>Meus Produtos</h4>
            </div>
          </Link>
        </div>

        <div className="help-exit">
          <button onClick={sair} className="exit">Sair</button>
        </div>
      </div>
    </div>
  );
}
