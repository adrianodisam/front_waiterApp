
import React, { useEffect } from 'react';
import { Order } from '../../types/Order';
import { OrdersBoards } from '../OrdersBoards';
import {  Container } from './styles';
import { api } from '../../utils/api';
import socketIo from  'socket.io-client';

export function Orders(){
  const [orders ,setorders] = React.useState <Order[]>([]);
  useEffect(() => {
    const socket = socketIo('http://127.0.0.1:3001',{
      transports : ['websocket'],
    });
    socket.on('order@new',(order)=>{
      // setorders(prevState => prevState.concat(order));
      setorders(preveState=> preveState.concat(order));
    });
  }, []);
  useEffect(() => {
    api.get('/orders').then(({data})=>{
      setorders(data);
    });
  }, [orders]);

  const ordersEspera : Order[] =orders.filter(orderesp =>(orderesp.status === 'WATING'));
  const orderspreparation : Order[] =orders.filter(orderesp =>(orderesp.status === 'IN_PRODUCTION'));
  const ordersready : Order[] =orders.filter(orderesp =>(orderesp.status === 'DONE'));
  function handCancelOrder(orderId:string){
    setorders((preveState)=> preveState.filter(order => order._id !== orderId ));
  }
  function handleOrderStatusChange(orderId : string ,  status :Order['status']){
    setorders((preveState)=> preveState.map((order)=>(
      order._id === orderId ? {...order,status} : order
    ) ));
  }

  return(
    <Container>
      <OrdersBoards icon='🕒' title = 'Fila de Espera' orders ={ordersEspera} onCancelOrder= {handCancelOrder} handleOrderStatusChange = {handleOrderStatusChange}/>
      <OrdersBoards  icon="👨‍🍳" title = 'Em Preparação' orders={orderspreparation} onCancelOrder= {handCancelOrder} handleOrderStatusChange = {handleOrderStatusChange} />
      <OrdersBoards  icon="✔" title = "Pronto" orders={ordersready}onCancelOrder= {handCancelOrder}handleOrderStatusChange = {handleOrderStatusChange}/>

    </Container>
  );
}
