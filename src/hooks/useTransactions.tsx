import { createContext, ReactNode, useEffect, useState, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(request => setTransactions(request.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });

        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction
        ]);

    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }} >
            {children}
        </ TransactionsContext.Provider>
    )

}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context;
}

