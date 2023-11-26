import closeIcon from '../../assets/images/close-icon.svg';
import { ModalBody, OverLay } from './styles';

interface OrderModalProps  {
  visible: boolean,
}
export function OrderModal({visible}:OrderModalProps){

  if(!visible){
    return null;
  }
  return (
    <OverLay>{visible}
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type = 'button'>
            <img src={closeIcon} alt='icone fechar modal' />
          </button>
        </header>
      </ModalBody>
    </OverLay>
  );
}
