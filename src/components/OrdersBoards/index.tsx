import React, { useState } from 'react';
import  {toast} from 'react-toastify';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { api } from '../../utils/api';
interface OrdersBoardsProps{
  icon:string;
  title :string;
  orders :Order[];
  onCancelOrder: (orderId:string)=> void
  handleOrderStatusChange :(orderId:string, status : Order['status'])=> void
}
export function OrdersBoards({icon,title,orders,
  onCancelOrder ,handleOrderStatusChange}:OrdersBoardsProps)
{
  const [isModalVisibled ,setisModalVisibled] = React.useState(false);
  const [selectOrder ,setselectOrder] = React.useState<null|Order>(null);
  const [isLoading, setisLoading] =  useState(false);
  function handleOpenModal(order: Order){
    setisModalVisibled(true);
    setselectOrder(order);

  }
  function handleCloseModal(){
    setisModalVisibled(false);
    setselectOrder(null);
  }
  async function handleChangeStatus(){
    setisLoading(true);
    const status = selectOrder?.status ==='WATING' ? 'IN_PRODUCTION' :'DONE';
    toast.success(`O pedido da mesa ${selectOrder?.table} teve o  status alterado`);
    setisLoading(false);
    setisModalVisibled(false);
    handleOrderStatusChange(selectOrder!._id ,status);


  }
  async function handleCancelOrder(){
    setisLoading(true);
    await api.delete(`/orders/${selectOrder?._id}`);
    toast.success(`O pedido da mesa ${selectOrder?.table} foi cancelado`);
    setisLoading(false);
    setisModalVisibled(false);
    onCancelOrder(selectOrder!._id);

  }
  return(
    <Board>
      <OrderModal visible= {isModalVisibled} order={selectOrder} onclose={handleCloseModal} onCancelOrder = {handleCancelOrder} isLoading={isLoading} OnchangeOrderStatus ={handleChangeStatus}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <strong>{orders.length}</strong>
      </header>
      {orders.length > 0 &&   <OrdersContainer>
        {orders.map((orderAtt)=>(
          <button type='button' key={orderAtt._id} onClick={()=>handleOpenModal(orderAtt)}>
            <strong>Mesa :{orderAtt.table}</strong>
            <span>{orderAtt.products.length}</span>
          </button>
        ))}
      </OrdersContainer> }
    </Board>
  );
}
