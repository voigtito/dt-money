import {GlobalStyle} from './styles/global';
import {Header} from './components/Header';
import { createServer } from 'miragejs';
import {Dashboard} from './components/Dashboard';

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
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
