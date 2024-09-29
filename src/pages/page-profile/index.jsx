import './index.scss';
import {useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Profile() {
  const { id } = useParams(); 
  const [consulProfile, setConsulProfile] = useState([]);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  async function carregarPerfil() {
    try {
      const url = `http://localhost:5001/api/consultarPerfil/${id}`;
      let resp = await axios.get(url);

      const perfil = resp.data;
      setNome(perfil.nome);
      setSenha(perfil.senha);
      setEmail(perfil.email);
    } catch (error) {
      console.error('Erro ao carregar o produto', error);
    }
  }

  useEffect(() => {
    carregarPerfil();
  }, [id]);


  async function salvarBD() {
    const salvador = {
      "nome": nome,
      "senha": senha,
      "email": email,
    }
    try {
      const url = `http://localhost:5001/api/alterarPerfil/${id}`;
      await axios.put(url, salvador);
      navigate('/products');
      alert(`Perfil de ${nome} alterado com sucesso!`);
    } catch (error) {
      console.error('Erro ao alterar o perfil', error);
      alert('Erro ao alterar o perfil.');
    }
  }

  async function buscar() {
    const url = 'http://localhost:5001/api/consultarPerfil';
    let resp = await axios.get(url);
    setConsulProfile(resp.data);
  }
  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="page-profile" >
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="rigth-profile">
        <div className="descrissao-page">
          <img src="/assets/image/mini-cake.png" alt="" />
          <h1>Meu perfil</h1>
        </div>
        <div className="img-name">
          {consulProfile.map(item => (
            <div className="profile_img" key={item.id}>
              <img src="assets/image/luiza-profile.jpg" alt="" />
              <h2>{item.nome}</h2>
            </div>          
          ))}
        </div>
        <div className="inputs-informations">
          <h2>Informações pessoais</h2>
          <div className="input_nome">
            <p>Nome</p>
            <input value={nome} type="text" onChange={e => setNome(e.target.value)} />
          </div>
          <div className="input_email">
            <p>E-mail</p>
            <input value={email} type="text" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input_senha">
            <p>Senha</p>
            <input value={senha} type="text" onChange={e => setSenha(e.target.value)} />
          </div>
          <button className='button-save' onClick={salvarBD}>Salvar</button>
        </div>

      </div>

    </div>
  );
}









