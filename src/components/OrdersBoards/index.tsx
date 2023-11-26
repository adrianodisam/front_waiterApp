import React from 'react';
import { order } from '../../types/types';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
interface OrdersBoardsProps{
  icon:string;
  title :string;
  orders : order[]
}
export function OrdersBoards({icon,title,orders}:OrdersBoardsProps)
{
  const [isModalVisibled ,setisModalVisibled] = React.useState(false);
  function handleOpenModal(){
    setisModalVisibled(true);

  }
  return(
    <Board>
      <OrderModal visible= {isModalVisibled}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <strong>{orders.length}</strong>
      </header>
      {/* {orders.length > 0 &&   <OrdersContainer>
        {orders.map((orderAtt)=>(
          <button type='button' key={orderAtt._id}>
            <strong>Mesa :{orderAtt.table}</strong>
            <span>{orderAtt.products.product.length}</span>
          </button>
        ))}
      </OrdersContainer> } */}
      <OrdersContainer>
        <button type='button' onClick={handleOpenModal}>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
