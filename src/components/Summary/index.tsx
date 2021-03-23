import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';

import totalImg from '../../assets/total.svg';
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>C$1000.00</strong>
            </div>

            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expenseImg} alt="expenses" />
                </header>
                <strong>- C$500.00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>C$500.00</strong>
            </div>
        </Container>
    );
}
