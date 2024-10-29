import './index.scss'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/comp-sidebar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Modal from "react-modal"
import { ControleCard } from '../../components/comp-order-card'

Modal.setAppElement("#root")

export default function Order() {



  const [openPopup, setOpenPopup]=useState(false)
  const [orders,setOrders]=useState([])

  const [editingOrder,setEditingOrder] = useState(null)
  
  const [nome,setNome]=useState('')
  const [data,setData]=useState('')
  const [produto,setProduto] = useState("")
  const [quantidade,setQuantidade] = useState("")
  const [telefone,setTelefone]=useState("")
  const [whatzapp,setWhatzapp]=useState('')
  const [endereco,setEndereco]=useState('')
  const [formaDePagamento, setFormaDePagamento] = useState("")
  const [valorTotal,setValorTotal]=useState('')
  const [status,setStatus]=useState("Em processo...")



  function openModal(orderIndex) {
    setOpenPopup(true)
    if (orderIndex !== null) {
        setEditingOrder(orderIndex)
        const order = orders[orderIndex]
        setNome(order.nome)
        setData(order.data)
        setProduto(order.produto)
        setQuantidade(order.quantidade)
        setTelefone(order.telefone)
        setWhatzapp(order.whatzapp)
        setEndereco(order.endereco)
        setFormaDePagamento(order.formaDePagamento)
        setValorTotal(order.valor)
        setStatus(order.status)
    } else {
        setEditingOrder(null)
        setNome("");
        setData("")
        setProduto("")
        setQuantidade("")
        setTelefone("")
        setWhatzapp("")
        setEndereco("")
        setFormaDePagamento("")
        setValorTotal("")
        setStatus("Em processo...")
    }
} function closeModal() {
    setOpenPopup(false)
    setEditingOrder(null)
  }
function salvarPedido() {
    const pedido = {
      nome,
      data,
  produto,
      quantidade,
      telefone,
      whatzapp,
   endereco,
    formaDePagamento,
  valor: valorTotal,
      status,
  }

    if (editingOrder !== null) {
      const updatedOrders = [...orders]
      updatedOrders[editingOrder] = pedido
      setOrders(updatedOrders)
    } else {
      setOrders([...orders, pedido])
    }

    closeModal();
  }

  function apagarPedido() {
    if (editingOrder !== null) {
           const updatedOrders = orders.filter((_, i) => i !== editingOrder)
      setOrders(updatedOrders);
    }
    closeModal();
  }
function marcarConcluido() {
        if (editingOrder !== null) {
      const updatedOrders = [...orders]
    updatedOrders[editingOrder].status = "Concluído"
      setOrders(updatedOrders)
}
    closeModal();
}

const Styles = {
    content: {
      left: '50%',
      right: 'auto',
      bottom: '50%',
      marginRight: '-50%',
      backgroundColor: "none",
  }}

  return (
    <div className="page-order">
      <Sidebar />
      <div className="rigth-add">
        <div className='topo'>
          <div className="descrissao-page">
            <img src="/assets/image/mini-cake.png" alt="" />
            <h1>Controle de Pedidos</h1>
            <div className='adicionar'>
              <p>Adicionar Pedido</p>
              <img src="/assets/image/lapis.png" alt="" />
              
            </div>
          </div>

          <p onClick={() => openModal(null)}>testeClick🤓</p>
          <div className='cards-page'>

            
            


            {orders.map((pedido, index) => (
              <div key={index} onClick={() => openModal(index)} className='pedido-card'>

                <ControleCard
                  nome={pedido.nome}
                  data={pedido.data}
                  produto={pedido.produto}
                  quantidade={pedido.quantidade}
                  valor={pedido.valor}
                  status={pedido.status}
                />
              </div>
            ))}

            <Modal 
              isOpen={openPopup}
              onRequestClose={closeModal}
              style={Styles}
            >



<div className='popup'>

<h1><input type="text" value={nome} onChange={e => setNome(e.target.value)} /></h1>

<div className='tudos'>

<div className='colunas'>

    <h5>Produto</h5>
 <p className='colunas'><input type="text" value={produto} onChange={e => setProduto(e.target.value)} /></p>

  <h5>Quantidade</h5>
  <p className='coluna'><input type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} /></p>
 </div>

    <div className='colunas'>

                    <h5>Telefone</h5>
  
   <p className='colunas'><input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} /></p>
 <h5>WhatsApp</h5>

 <p className='coluna'><input type="text" value={whatzapp} onChange={e => setWhatzapp(e.target.value)} /></p>
 </div>
 <div className='colunas'>
 <h5>Endereço</h5>
   <p className='coluna'><input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} /></p>
 </div>
 <div className='colunas'>
  <h5>Forma de pagamento</h5>

  <p className='coluna'><input type="text" value={formaDePagamento} onChange={e => setFormaDePagamento(e.target.value)} /></p>
  <h5>Valor total</h5>
 <p><input type="text" value={valorTotal} onChange={e => setValorTotal(e.target.value)} /></p>

</div>
</div>
                <div className='botoes'>
                <p className='apagar' onClick={apagarPedido}>Apagar Pedido</p>
                           
                  <p className='concluido' onClick={marcarConcluido}>Marcar Concluído</p>
                  <p className='editar' onClick={salvarPedido}>Editar Detalhes</p> 
                  


 </div>
              </div>
            </Modal>


 </div>
  </div>


      </div>
    </div>
  );
}
