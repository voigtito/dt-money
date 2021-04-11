import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { createServer } from 'miragejs';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { useState } from 'react';
import NewTransactionModal from './components/NewTransactionModal';

createServer({
  routes() {
    this.namespace = 'api'; // All calls get this base name.

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
});

Modal.setAppElement('#root'); // For acessibility (written in docs).

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
};
