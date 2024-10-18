import './index.scss';

import Sidebar from '../../components/comp-sidebar';

export default function Order() {
    
    return (
        <div className='page-order' >
             <Sidebar/>

        <div className='order'>
            
            <div className='title' >

                <img src="/assets/image/mini-cake.png" alt="" />
                <h1 >Novo Pedido</h1>

            </div>

  
                    
                <h4>Nome Cliente:</h4>
                <input type="text" name="" id="" />

                <h4>Endereço:</h4>
                <input type="text" name="" id="" />

            <div className='section' >

                <h4>WhatsApp:</h4>
                <input type="text" name="" id="" />

                <h4>Quantidade</h4>

                <div className='subsection'>

                    <h4>Telefone:</h4>
                    <input type="text" name="" id="" />

                    <h4>Valor:</h4>
                    <input type="text" name="" id="" />

                </div>

            </div>

            <h4>Forma de Pagamento</h4>
            <select name="" id="">
                <option value="">PIX</option>
                <option value="">Crédito</option>
                <option value="">Dédito</option>
            </select>

            <div className='buttons'>

                 <button>Salvar</button>

                <button>Cancelar</button>   

            </div>



                    
        
        </div>     


        </div>


    )

}