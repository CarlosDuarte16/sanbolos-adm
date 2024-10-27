import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Sidebar() {
  const [consulProduct, setConsulProduct] = useState([]);

  return (
    <div className="comp-sidebar" >
      <div className="logo-name">
        <img src="assets/image/logo.png" alt="" />
        <h1>SanBolos</h1>
      </div>
      <div className="profile-access">
        {consulProduct.map(item => (
          <div key={item.id} className='profile-description'>
              <img src="assets/image/luiza-profile.jpg" alt="" />
              <h2>{item.nome}</h2>
          </div>
        ))}
        <div className="double-text">
          <Link to="/profile/:id" className='link-myprofile'>
            <div className="text-arrow">
              <p>Meu perfil</p>
              <img src="/assets/image/arrow-right.png" alt="" />
            </div>
          </Link>
        </div>
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
        <Link to="/" className='exit'>Sair</Link>
      </div>

    </div>
  );
}

export function ControleCard(props){

  

  return(
    <div className='card'>
    <div className='dados-toopo'>
        <h6>{props.nome}</h6>
            <p className=''>Data:</p>
            <p>{props.data}</p>
        </div>                 
        <div className='usuario'>
            <h4>Produto:</h4>                 
        <p className='dados'>{props.produto}</p>
        </div>
        <div className='usuario'>
            <h4>Quantidade:</h4>
        <p className='dados'>{props.quantidade}</p>
        </div>
        <div className='usuario'>
            <h4> Valor Total:</h4>
        <p className='dados'>{props.valor}</p>
        </div>            
    <p className='centro'>Em processo...</p>
        </div>
  )
}

export function Popup({isOpen}){

  const[closePopup,setClosePopup]=useState()
  
  function closeModal(){
 setClosePopup(false)
  }


   if(isOpen){

 
      
    }

    return(
      null
    )
  

}

