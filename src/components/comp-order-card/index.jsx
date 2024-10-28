import './index.scss';
import { useState, useEffect } from 'react';
import Modal from "react-modal"

export function ControleCard(props) {

  
  return (
    
    <div className='card'  >
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
      <p className='centro'>{props.status}</p>
    </div>
    
  )
}

