import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';


export function TransactionsTable() {
    const { transactions } = useTransactions();

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
