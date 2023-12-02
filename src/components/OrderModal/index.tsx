import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../format/formatCurrency';
import { Order } from '../../types/Order';
import { Actions, ModalBody, OrderDetails, OverLay } from './styles';

interface OrderModalProps{
  visible: boolean,
  order : Order | null;
  onclose : ()=> void;
}
export function OrderModal({visible,order,onclose}:OrderModalProps){
  if(!visible ||!order){
    return null;
  }
  const total=order.products.reduce((total,{quantity,product})=>{
    return total + (product.price * quantity);
  },0);
  return (
    <OverLay>{visible}
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type = 'button' onClick={onclose}>
            <img src={closeIcon} alt='icone fechar modal' />
          </button>
        </header>
        <div className="status-container">
          <small> Status do Pedido</small>
          <div>
            <span>
              {order.status ==='WATING' && '🕒'}
              {order.status ==='IN_PRODUCTION' && '👨‍🍳'}
              {order.status ==='DONE' && '✔'}
            </span>
            <strong>
              {order.status ==='WATING' && 'Fila de espera'}
              {order.status ==='IN_PRODUCTION' && 'Em Preparação'}
              {order.status ==='DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="orders-items">
            {order.products.map(({_id,quantity,product})=>(
              <div className="item" key={_id}>
                <img src={'http://localhost:3001/uploads/'+product.imgePath}  alt={product.name} width="56" height="28.51"/>
                <span className="quantity">{quantity}X</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
        <Actions>
          <button type='button' className='primary'>
            <span>👨‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>
          <button type='button'className='secondary'>
            Cancelar Pedido
          </button>
        </Actions>
      </ModalBody>
    </OverLay>
  );
}
