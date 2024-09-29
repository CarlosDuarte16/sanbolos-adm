import './index.scss';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';

import axios from 'axios';

import { useState, useEffect } from 'react';

export default function Products() {
  const [consulProduct, setConsulProduct] = useState([]);

  async function buscar() {
    const url = 'http://localhost:5001/api/consultarProduto';
    let resp = await axios.get(url);
    setConsulProduct(resp.data);
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="page-product" >
      <Sidebar />
      <div className="rigth-product">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Meus Produtos</h1>
          <Link className='add' to="/add-product">
            <div className="adicionar">
              <img src="/assets/image/lapis.png" alt="" />
              <p>Adicionar</p>
            </div>
          </Link>
        </div>


        <div className="cards_products">
          {consulProduct.map(item => (
            <Link to={`/edit-product/${item.id}`} key={item.id} className='link-card'>
              <div className='card'>
                <img src="/assets/image/bolo.jpeg" alt="" />
                <h3>{item.nome}</h3>
                <p>R${item.valor}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

