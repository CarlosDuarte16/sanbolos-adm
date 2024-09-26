import './index.scss';
import { Link } from 'react-router-dom';
export default function Login() {
  
  return (
    <div className="page-login" style={{ backgroundImage: `url('/assets/image/Banner-sanbolos.png')` }}>
      <div className="card-login">
        <h2>Log In</h2>
        <div className="input">
          <p>E-mail</p>
          <input type="text" placeholder='Digite seu email' />
        </div>
        <div className="input">
          <p>Senha</p>
          <input type="text" placeholder='Digite sua senha' />
        </div>
        <Link>
          <button>Entrar</button>
        </Link>
      </div>
    </div>
  );
}

