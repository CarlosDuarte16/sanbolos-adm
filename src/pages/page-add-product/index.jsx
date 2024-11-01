import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';

import axios from 'axios';

import { useEffect, useState, } from 'react';
import toast from 'react-hot-toast';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [disponivel, setDisponivel] = useState(false);
  const navigate = useNavigate();


  async function salvarBD() {
      const salvador = {
        "nome": title,
        "descrição": description,
        "preço": price,
        "image": title,
        "disponibilidade": disponivel
      }
      

      if(title == '' && description == '' && price == ''){
        toast.error("Precisa preencher todos os campos!!"); 
      }
      if(price <= 0){
        toast.error("Digite um valor maior que 0!!")
      }
      
      else{
        const url = 'https://api-sanbolos.onrender.com/inserirProduto';
        let resp = await axios.post(url, salvador);
        navigate('/products');  
        toast.success(`Produto adicionado.`)  
      }

  }


  return (
    <div className="page-add-product" >
      <Sidebar />
      <div className="rigth-add">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Novo Produto</h1>
        </div>
        <div className="inputs">
          <div className="input-title-product">
            <h3>Titulo do Produto</h3>
            <input type="text" value={title} maxLength={50} onChange={e => setTitle(e.target.value)} />
          </div> 
          <div className="input-description-product">
            <h3>Descrição</h3>
            <textarea value={description} maxLength={100} onChange={e => setDescription(e.target.value)} rows='4'></textarea>
          </div>
          <div className="input_price-input-boolean">
            <div className="input-price-product">
              <h3>Preço</h3>
              <input value={price} maxLength={6} onChange={e => setPrice(e.target.value)} type="text" />
            </div>
            <div className="input-availability-product">
              <h3>Disponivel</h3>
              <div className="radio">
                <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
              </div>
            </div>
          </div>
          <div className="buttons-save-cancel">
            <button onClick={salvarBD}>Salvar</button>
            <Link className='button-link' to='/products'><button>Cancelar</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

