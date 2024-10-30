import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [consulProduct, setConsulProduct] = useState([]);
  const navigate = useNavigate()
  const [token, setToken] = useState(null);

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
      <div className="options-page">
        <Link className='link-img' to="/products">
          <div className="div-link">
            <img src="/assets/image/cupcake.png" alt="" />
            <h4>Meus Produtos</h4>
          </div>
        </Link>
        <Link className='link-img'>
          <div className="div-link">
            <img src="/assets/image/cupcake.png" alt="" />
            <h4>Controle de pedidos</h4>
          </div>
        </Link>
      </div>
      <div className="help-exit">
        <Link className='help'>Ajuda</Link>
        <button onClick={sair} className='exit'>Sair</button>
      </div>

    </div>
  );
}

