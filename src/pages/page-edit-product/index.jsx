import './index.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function EditProduct() {
  const { id } = useParams();
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


  async function carregarProduto() {
    try {
      const url = `http://localhost:5001/consultarProdutos/${id}`;
      // const url = `http://4.172.207.208:5012/consultarProdutos/${id}`;
      let resp = await axios.get(url);

      const produto = resp.data;
      setTitle(produto.nome);
      setDescription(produto.descrição);
      setPrice(produto.valor);
    } catch (error) {
      console.error('Erro ao carregar o produto', error);
    }
  }

  async function products_navigate() {
    navigate('/products')
  }

  useEffect(() => {
    carregarProduto();
  }, [id]);

  async function salvarBD() {
    const produto = {
      "nome": title,
      "descrição": description,
      "preço": price,
      "image": imagem,
    };

    try {
      if (title.trim() === '' || description.trim() === '' || price.trim() === '') {
        toast.error(`Precisa preencher todos os campos`);
      } else if (isNaN(price) || parseFloat(price) <= 0) {
        toast.error("O preço deve ser um número válido maior que zero!!");
      } else {
        const url = `http://localhost:5001/alterarProduto/${id}`;
        // const url = `http://4.172.207.208:5012/alterarProduto/${id}`;
        await axios.put(url, produto);
        toast.success(`Produto ${title} alterado com sucesso!`);
        navigate('/products')
      }
    } catch (error) {
      console.error('Erro ao alterar o produto', error);
      toast.error('Erro ao alterar o produto.');
    }
  }

  async function deletarProduto() {
    const confirmar = window.confirm('Tem certeza que deseja excluir este produto?');

    if (confirmar) {
      try {
        const url = `http://localhost:5001/removerProduto/${id}`;
        // const url = `http://4.172.207.208:5012/removerProduto/${id}`;
        await axios.delete(url);
        toast.success(`Produto ${title} deletado com sucesso!`);
        navigate('/products');
      } catch (error) {
        console.error('Erro ao deletar o produto', error);
      }
    }
  }

  return (
    <div className="page-edit-product">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="rigth-adit">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Edição Produto</h1>
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
          <div className="input_price-input-image">
            <div className="input-price-product">
              <h3>Preço</h3>
              <input value={price} maxLength={6} onChange={e => setPrice(e.target.value)} type="text" />
            </div>
            <div className="input-file-product">
              <h3>Upload de Imagem</h3>
              <div className="input-file">
                <input type="file" accept='image/*' onChange={alterarImagem} />
              </div>
            </div>
          </div>
          <div className="buttons-save-cancel">
            <button onClick={salvarBD}>Salvar</button>
            <button className='button-link' onClick={deletarProduto}>Apagar</button>
            <button onClick={products_navigate}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}


