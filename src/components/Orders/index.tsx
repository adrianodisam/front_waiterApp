import { Order } from '../../types/Order';
import { OrdersBoards } from '../OrdersBoards';
import {  Container } from './styles';

const orders:Order[] = [
  {
    '_id': '655acb34de7c1a39486eb339',
    'table': '900',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 40,
        },
        'quantity': 60,
        '_id': '655acb34de7c1a39486eb33a'
      },
      {
        'product':
        {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 40,
        },
        'quantity': 80,
        '_id': '655acb34de7c1a39486eb33b'
      }
    ],
  }
];

export function Orders(){
  return(
    <Container>
      <OrdersBoards icon='🕒' title = 'Fila de Espera' orders ={orders}/>
      <OrdersBoards  icon="👨‍🍳" title = 'Em Preparação' orders={[]}/>
      <OrdersBoards  icon="✔" title = "Pronto" orders={[]}/>
    </Container>
  );
}
