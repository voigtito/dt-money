import { Container } from './styles';
import Modal from 'react-modal';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título"/>
        <input placeholder="Valor" type="number"/>
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
