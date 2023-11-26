import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { ModalBody, OrderDetails, OverLay } from './styles';

interface OrderModalProps  {
  visible: boolean,
  order : Order | null;
}
export function OrderModal({visible,order}:OrderModalProps){
  if(!visible ||!order){
    return null;
  }
  return (
    <OverLay>{visible}
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type = 'button'>
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

          {order.products.map(({_id,quantity,product})=>(
            <div key={_id}>
              <img src={'http://localhost:3001/uploads/'+product.imgePath} alt={product.name} width="56" height="28.51"/>
              <span className="quantity">{quantity}X</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
            </div>

          ))}
        </OrderDetails>
      </ModalBody>
    </OverLay>
  );
}
