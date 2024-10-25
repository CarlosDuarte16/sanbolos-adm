import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();


  async function entrar() {
    try {
      const usuario = {
        nome,
        senha
      }
  
      const url = `http://localhost:5001/api/entrar/`
      let resp = await axios.post(url, usuario)
  
      if (resp.data.erro !== undefined) {
        toast.error(resp.data.erro)
      } else {
        localStorage.setItem('USUARIO', resp.data.token)
        navigate('/products')
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
  }
  


  return (
    <div className="page-login" style={{ backgroundImage: `url('/assets/image/Banner-sanbolos.png')` }}>
      <div className="card-login">
        <h2>Log In</h2>
        <div className="input">
          <p>Usuário</p>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
        <button onClick={entrar}>Entrar</button>
      </div>
    </div>
  );
}
