import './index.scss';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/comp-sidebar';

export default function AddProduct() {

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
            <input type="text" />
          </div>
          <div className="input-description-product">
            <h3>Descrissão</h3>
            <textarea rows='4'></textarea>
          </div>
          <div className="input_price-input-boolean">
            <div className="input-price-product">
              <h3>Preço</h3>
              <input type="text" />
            </div>
            <div className="input-availability-product">
              <h3>Disponivel</h3>
              <div className="radios">
                <div className="radio">
                  <p>Sim</p>
                  <input type="radio" />
                </div>
                <div className="radio">
                  <p>Não</p>
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
          <div className="capture-image">
            <h3></h3>
            <button></button>
          </div>
          <div className="buttons-save-cancel">
            <button>Salvar</button>
            <button>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

