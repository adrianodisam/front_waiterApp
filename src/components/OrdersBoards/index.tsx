import React from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
interface OrdersBoardsProps{
  icon:string;
  title :string;
  orders :Order[];
}
export function OrdersBoards({icon,title,orders}:OrdersBoardsProps)
{
  const [isModalVisibled ,setisModalVisibled] = React.useState(false);
  const [selectOrder ,setselectOrder] = React.useState<null|Order>(null);
  function handleOpenModal(order: Order){
    setisModalVisibled(true);
    setselectOrder(order);

  }
  function handleCloseModal(){
    setisModalVisibled(false);
    setselectOrder(null);
  }
  return(
    <Board>
      <OrderModal visible= {isModalVisibled} order={selectOrder} onclose={handleCloseModal}/>
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
