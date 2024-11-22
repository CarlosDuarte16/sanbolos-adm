import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Products() {
  const [consulProduct, setConsulProduct] = useState([]);
  const navigate = useNavigate();

  async function buscar() {
    try {
      const url = `http://localhost:5001/consultarProduto/`;
      // const url = `http://4.172.207.208:5012/consultarProduto/`;
      const resp = await axios.get(url);
      setConsulProduct(resp.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      alert("Não foi possível carregar os produtos. Tente novamente mais tarde.");
    }
  }
  useEffect(() => {
    if (localStorage.getItem('USUARIO') === undefined) {
      navigate('/');
    } else {
      buscar();
    }
  }, [navigate]);

  return (
    <div className="page-product" >
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="rigth-product">
        <div className="descriçao-page">
          <div className='LE'>
            <img src="/assets/image/mini-cake.png" alt="" />
            <h1>Meus Produtos</h1>
          </div>
          <Link className='add' to="/add-product">
            <div className="adicionar">
              <img src="/assets/image/lapis.png" alt="" />
              <p>Adicionar</p>
            </div>
          </Link>
        </div>
        <div className="cards_products">
          {consulProduct.length > 0 ? (
            consulProduct.map(item => (
              <Link to={`/edit-product/${item.id}`} key={item.id} className='link-card'>
                <div className='card'>
                  <img src={item.image} alt={item.nome} />
                  <h3>{item.nome}</h3>
                  <p>R${item.valor}</p>
                </div> 
              </Link>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}
