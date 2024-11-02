import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [consulUsuario, setConsulUsuario] = useState([]);
  const navigate = useNavigate()
  const [token, setToken] = useState(null);

  async function usuario() {
    const url = 'http://4.172.207.208:5012/consultarUsuario/';
    let resp = await axios.get(url);
    setConsulUsuario(resp.data);
  }
  useEffect(() => {
    usuario()
  }, []);
  

  async function sair() {
    localStorage.setItem('USUARIO', null)
    navigate('/')
  }

  useEffect(() => {
    let token = localStorage.getItem('USUARIO')
    setToken(token)

    if (token == 'null') {
      navigate('/')
    }
  }, [])


  return (
    <div className="comp-sidebar" >
      <div className="logo-name">
        <img src="assets/image/logo.png" alt="" />
        <h1>SanBolos</h1>
      </div>
      <div className='profile'>
        <img src="assets/image/person.png" alt="" />
          {consulUsuario.map(item => (
            <div className=''>
              <h3>{item.nome}</h3>
            </div>
          ))}
      </div>
      <div className="options-page">
        <Link className='link-img' to="/products">
          <div className="div-link">
            <img src="/assets/image/cupcake.png" alt="" />
            <h4>Meus Produtos</h4>
          </div>
        </Link>
      </div>
      <div className="help-exit">
        <button onClick={sair} className='exit'>Sair</button>
      </div>

    </div>
  );
}

