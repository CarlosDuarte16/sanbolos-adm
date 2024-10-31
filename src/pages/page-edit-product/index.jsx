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
  const [disponivel, setDisponivel] = useState(false);
  const navigate = useNavigate();
  


  async function carregarProduto() {
    try {
      const url = `http://localhost:5001/api/consultarProduto/${id}`;
      let resp = await axios.get(url);
  
      const produto = resp.data;
      setTitle(produto.nome);
      setDescription(produto.descrição);
      setPrice(produto.valor);
      setDisponivel(produto.disponibilidade);
    } catch (error) {
      console.error('Erro ao carregar o produto', error);
    }
  }
  
  useEffect(() => {
    carregarProduto();
  }, [id]);

  async function salvarBD() {
    const produto = {
      "nome": title,
      "descrição": description,
      "preço": price,
      "image": '',
      "disponibilidade": disponivel
    };

    try {
      if(title == '' && description == '' && price == ''){
        toast.error("Precisa preencher todos os campos!!"); 
      }
      if(price <= 0){
        toast.error("Digite um valor maior que 0!!")
      }
      else{
        const url = `http://localhost:5001/api/alterarProduto/${id}`;
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
        const url = `http://localhost:5001/api/removerProduto/${id}`;
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
      <Sidebar />
      <div className="rigth-add">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Editar Produto</h1>
        </div> 
        <div className="inputs">
          <div className="input-title-product">
            <h3>Título do Produto</h3>
            <input placeholder={title} type="text" value={title} maxLength={50} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="input-description-product">
            <h3>Descrição</h3>
            <textarea value={description} maxLength={100} onChange={e => setDescription(e.target.value)} rows='4'></textarea>
          </div>
          <div className="input_price-input-boolean">
            <div className="input-price-product">
              <h3>Preço</h3>
              <input value={price} maxLength={4} onChange={e => setPrice(e.target.value)} type="text" />
            </div>
            <div className="input-availability-product">
              <h3>Disponível</h3>
              <div className="radio">
                <input type="checkbox" checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
              </div>
            </div>
          </div>
          <div className="buttons-save-cancel">
            <button className='button-link' onClick={salvarBD}>Salvar</button>
            <button className='button-link' onClick={deletarProduto}>Apagar</button>
            <Link className='button-link' to='/products'>Cancelar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
