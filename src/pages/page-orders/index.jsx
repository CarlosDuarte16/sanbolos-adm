import './index.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar, { ControleCard, Popup } from '../../components/comp-sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from "react-modal"




export default function Order(){

 const[openPopup,setOpenPopup]=useState(false)

 function openModal(){
    setOpenPopup(true)
}


 function closeModal(){
    setOpenPopup(false)
  }

  const Styles={
    content:{
      
        left:'50%',
        right:"auto",
        botton:"50%",
        marginRight:"-50%",
        transfor:"trasleite(-50%,-50%)",
        backgroundColor: "none"
        
        
        
    }
  }

 


 return(
    <div className="page-order">

            <Sidebar/>

            <div className="rigth-add">
                <div className='topo'>
                <div className="descrissao-page">
                        <img src="/assets/image/mini-cake.png" alt="" />
                        <h1>Controle de Pedidos</h1>
                        
                        <div className='adicionar' onClick={openModal}>
                            <p>Adicionar</p>
                            <img src="/assets/image/lapis.png" alt="" />

                        </div>
                        </div>

                       


                        <div className='cards-page'>

                            <ControleCard
                            nome='Roberto'
                            data='05/05/2024'
                            produto='Bolo'
                            quantidade='01'
                            valor='0.1'
                            /> 

                            <ControleCard
                            nome='fulano2'
                            data='05/05/2024'
                            produto='Bolo'
                            quantidade='01'
                            valor='0.1'
                            />



                            <Modal
                                   isOpen={openPopup}
                                   onRequestClose={closeModal}
                                   style={Styles}
                            >

                                    
      <div className='popup'>
  
  <h1>Fulano</h1>


  <div className='tudos'>

  <div className='colunas'>

<h5>Produto</h5>

<p className='colunas'><input type="text" /></p>

<h5>Quantidade</h5>

<p className='coluna'><input type="text" /></p>

    </div>



    <div className='colunas'>

<h5>Telefone</h5>

<p className='colunas'><input type="text" /></p>

<h5>Whatzapp</h5>

<p className='coluna'><input type="text" /></p>

    </div>
    


    



<div  className='colunas'>
<h5>Endereço</h5>
<p  className='coluna'><input type="text" /></p>
</div>


<div className='colunas'>

  <h5>Forma de pagamento</h5>
<p  className='coluna'><input type="text" /></p>

<h5>valor total</h5>
<p><input type="text" /></p>

</div>

  </div>


  


<div className='botoes'>
<p className='apagar'>Apagar Pedido</p>

<p className='concluidoo' onClick={closeModal}>Marcar Concluido</p>

<p className='editar'>Editar Detalhe</p>

</div>


</div>



                            </Modal>

  

                            

              
                        </div>


                        
                

             

        


        </div>
        </div>
        </div>
    )
}
