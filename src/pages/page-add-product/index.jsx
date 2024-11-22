import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';

import axios from 'axios';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imagem, setImagem] = useState(null);
  const navigate = useNavigate();

  function alterarImagem(e) {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Por favor, selecione um arquivo de imagem válido.");
    }
  }

  async function products_navigate() {
    navigate('/products')
  }

  async function salvarBD() {
    if (title.trim() === '' || description.trim() === '' || price.trim() === '') {
      toast.error("Todos os campos devem ser preenchidos.");
      return;
    }
    if (isNaN(price) || parseFloat(price) <= 0) {
      toast.error("O preço deve ser um número válido maior que zero.");
      return;
    } 
    if (!imagem) {
      toast.error("Por favor, adicione uma imagem do produto.");
      return;
    }
    const salvador = {
      nome: title,
      descrição: description,
      valor: price,
      image: imagem,
    };
    try {
      const url = 'http://4.172.207.208:5012/inserirProduto/';
      await axios.post(url, salvador);
      toast.success("Produto adicionado com sucesso.");
      navigate('/products');
    } catch (error) {
      toast.error("Erro ao adicionar o produto. Tente novamente.");
      console.error("Erro ao salvar no BD:", error);
    }
  }
  return (
    <div className="page-add-product" >
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="rigth-add">
          <div className="descriçao-page">
            <img src="/assets/image/mini-cake.png" alt="" />
            <h1>Novo Produto</h1>
          </div>
          <div className="inputs">
            <div className="input-title-product-first">
              <h3>Titulo do Produto</h3>
              <input className='input1' type="text" value={title} maxLength={50} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="input-description-product-first">
              <h3>Descrição</h3>
              <textarea  className='input2' value={description} maxLength={100} onChange={e => setDescription(e.target.value)} rows='4'></textarea>
            </div> 
            <div className="input_price-input-image">
              <div className="input-price-product">
                <h3>Preço</h3>
                <input className='price' value={price} maxLength={6} onChange={e => setPrice(e.target.value)} type="text" />
              </div>
              <div className="input-file-product">
                <h3>Upload de Imagem</h3>
                  <input type="file" accept='image/*' onChange={alterarImagem} />
              </div>
            </div>
            <div className="buttons-save-cancel">
              <button onClick={salvarBD}>Salvar</button>
                <button onClick={products_navigate}>Cancelar</button>
            </div>
          </div>
        </div>
    </div>
  );
}

