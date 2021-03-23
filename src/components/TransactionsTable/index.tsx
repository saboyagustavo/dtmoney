import { Container } from './styles';

export function TransactionsTable() {
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
                    <tr>
                        <td>WebPage maintenance</td>
                        <td className="income">$1,000.00</td>
                        <td>freelance</td>
                        <td>03.31.2021</td>
                    </tr>
                    <tr>
                        <td>Groceries</td>
                        <td className="expense">- $500.00</td>
                        <td>supermarket</td>
                        <td>04.11.2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
