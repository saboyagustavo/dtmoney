import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transactions {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('/transactions').then(request => setTransactions(request.data.transactions));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({ id, title, amount, category, type, createdAt }) => (
                        <tr key={id}>
                            <td>{title}</td>
                            <td className={type}>
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'CAD',
                                }).format(amount)}
                            </td>
                            <td>{category}</td>
                            <td>
                                {new Intl.DateTimeFormat('en-US')
                                    .format(new Date(createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
