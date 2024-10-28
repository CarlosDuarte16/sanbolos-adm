import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function ControleCard(props) {
  
  return (
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

export function Popup({ isOpen }) {

  const [closePopup, setClosePopup] = useState()

  function closeModal() {
    setClosePopup(false)
  }


  if (isOpen) {



  }

  return (
    null
  )


}

