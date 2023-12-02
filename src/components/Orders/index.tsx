
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
  }, {
    '_id': '655acb34de7c1a39986eb339',
    'table': '1',
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
  }, {
    '_id': '655acb34de7c1039486eb339',
    'table': '2',
    'status': 'WATING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 20,
        },
        'quantity': 6,
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
  }, {
    '_id': '655pcb34de7c1ap9486eb339',
    'table': '3',
    'status': 'IN_PRODUCTION',
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
  }, {
    '_id': '695acb34oe7c1a39486eb339',
    'table': '4',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 9,
        },
        'quantity': 1,
        '_id': '655acb34de7c1a39486eb33a'
      },
      {
        'product':
        {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 5,
        },
        'quantity': 10,
        '_id': '655acb34de7c1a39486eb33b'
      }
    ],
  }, {
    '_id': '655acb30de7c1pa39486eb339',
    'table': '5',
    'status': 'WATING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 10,
        },
        'quantity': 1,
        '_id': '655acb34de7c1a39486eb33a'
      },
      {
        'product':
        {
          'name': 'Pizza quatro queijos',
          'imgePath': '1700444023001-coca-cola.png',
          'price': 4,
        },
        'quantity': 3,
        '_id': '655acb34de7c1a39486eb33b'
      }
    ],
  }
];
const ordersEspera : Order[] =orders.filter(orderesp =>(orderesp.status === 'WATING'));
const orderspreparation : Order[] =orders.filter(orderesp =>(orderesp.status === 'IN_PRODUCTION'));
const ordersready : Order[] =orders.filter(orderesp =>(orderesp.status === 'DONE'));

export function Orders(){
  return(
    <Container>
      <OrdersBoards icon='🕒' title = 'Fila de Espera' orders ={ordersEspera}/>
      <OrdersBoards  icon="👨‍🍳" title = 'Em Preparação' orders={orderspreparation}/>
      <OrdersBoards  icon="✔" title = "Pronto" orders={ordersready}/>

    </Container>
  );
}
