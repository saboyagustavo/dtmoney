import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export function App() {
    const [IsNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

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
            <Modal isOpen={IsNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
                <h2>Cadastrar Transação</h2>
            </Modal>
            <GlobalStyle />
        </>
    );
}
