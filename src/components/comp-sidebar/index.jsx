import './index.scss';
import { Link } from 'react-router-dom';
export default function Sidebar() {

  return (
    <div className="comp-sidebar" >
      <div className="logo-name">
        <img src="assets/image/logo.png" alt="" />
        <h1>SanBolos</h1>
      </div>
      <div className="profile-access">
        <img src="/assets/image/luiza-profile.jpg" alt="" />
        <div className="double-text">
          <h3>Anna Luiza</h3>
          <Link className='link-myprofile'>
            <div className="text-arrow">
              <p>Meu perfil</p>
              <img src="/assets/image/arrow-right.png" alt="" />
            </div>
          </Link>
        </div>
      </div>

      <div className="options-page">
        <Link className='link-img'>
          <div className="div-link">
            <img src="/assets/image/mini-cake.png" alt="" />
            <h4>Meus Produtos</h4>
          </div>
        </Link>
        <Link className='link-img'>
          <div className="div-link">
            <img src="/assets/image/mini-cake.png" alt="" />
            <h4>Controle de pedidos</h4>
          </div>
        </Link>
      </div>
      <div className="help-exit">
        <Link className='help'>Ajuda</Link>
        <Link className='exit'>Sair</Link>
      </div>

    </div>
  );
}

