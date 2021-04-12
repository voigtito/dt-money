import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {

  const [type, setType] = useState('deposit');

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button">
        <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className='react-modal-close'/>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título"/>
        <input placeholder="Valor" type="number"/>
        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'}>
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'}>
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
