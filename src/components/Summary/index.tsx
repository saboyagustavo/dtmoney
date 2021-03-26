import React, { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/expense.svg';
import totalImg from '../../assets/total.svg';

export function Summary(): JSX.Element {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.incomes += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.expenses += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        incomes: 0,
        expenses: 0,
        total: 0
    });


    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'CAD',
                    }).format(summary.incomes)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expenseImg} alt="expenses" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'CAD',
                }).format(summary.expenses)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'CAD',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
