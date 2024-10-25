import './index.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function AddOrder() {
  const navigate = useNavigate();

  return (
    <div className="page-edit-product">
      <Sidebar />
      <div className="rigth-add">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Novo Pedido</h1>
        </div>

        <div className="inputs">
          <div className="input-nome_cliente">
            <h2>Nome Cliente</h2>
            <input type="text" />
          </div>

          <div className="input-endereço_cliente">
            <h2>Endereço</h2>
            <input type="text" />
          </div>

          <div className="first-input_par">
            <div className="input-whatsapp_cliente">
              <h2>Whatsapp</h2>
              <input type="text" />
            </div>

            <div className="input-forma_pagamento_cliente">
              <h2>Forma de Pagamento</h2>
              <input type="text" />
            </div>
          </div>

          <div className='par-titulo-valor'>
            
          <div className="input-titulo_produto">
            <h2>Titulo do Produto</h2>
            <input type="text" />
          </div>
        
          <div className="second-input_par">
            <div className="input-valor_produto">
              <h2>Valor</h2>
              <input type="text" />
            </div>

          </div>
        </div>
            
            <div className="input-quantidade_produto">
              <h2>Quantidade</h2>
              <input type="text" />
            </div>
          </div>
        
      <div className="buttons-save-cancel">
        <button className='button-link'>Salvar</button>
        <button className='button-link'>Apagar</button>
        <Link className='button-link' to='/products'>Cancelar</Link>
      </div>

      </div>
    </div>
  );
}
