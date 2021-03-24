import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('');
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="close" />
            </button>

            <Container>
                <h2>New transaction</h2>

                <input
                    placeholder="Title"
                />

                <input
                    type="number"
                    placeholder="Value"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('income')}
                        activeColor='green'
                        isActive={type === 'income'}
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('expense')}
                        activeColor='red'
                        isActive={type === 'expense'}
                    >
                        <img src={expenseImg} alt="expense" />
                        <span>Expense</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                />

                <button
                    type="submit">
                    Save
                </button>
            </Container>
        </Modal>
    );
}
