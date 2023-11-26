import { OrdersBoards } from '../OrdersBoards';

import {  Container } from './styles';

export function Orders(){
  return(
    <Container>
      <OrdersBoards icon='🕒' title = 'Fila de Espera' orders ={[]}/>
      <OrdersBoards  icon="👨‍🍳" title = 'Em Preparação' orders={[]}/>
      <OrdersBoards  icon="✔" title = "Pronto" orders={[]}/>
    </Container>
  );
}
