import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState([]);
  const navigate = useNavigate();

    async function buscarPerfis() {
      const url = 'http://localhost:5001/api/consultarPerfil';
      let resp = await axios.get(url);
      setPerfil(resp.data);
    }
  
    useEffect(() => {
      buscarPerfis();
    }, []);
  
    function Access_login() {
      const perfilEncontrado = perfil.find(perfil => perfil.email === email && perfil.senha === senha);
  
      if (perfilEncontrado) {
        navigate("/products");
      } else {
        alert("E-mail ou senha incorretos");
      }
    }
  return (
    <div className="page-login" style={{ backgroundImage: `url('/assets/image/Banner-sanbolos.png')` }}>
      <div className="card-login">
        <h2>Log In</h2>
        <div className="input">
          <p>E-mail</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <p>Senha</p>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button onClick={Access_login}>Entrar</button>
      </div>
    </div>
  );
}
