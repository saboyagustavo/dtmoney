import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    models: {
        transaction: Model,
    },
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'WebPage maintenance',
                    type: 'income',
                    category: 'freelance',
                    amount: 2453.24,
                    createdAt: new Date('2021-03-31 09:42:21')
                },
                {
                    id: 2,
                    title: 'Groceries',
                    type: 'expense',
                    category: 'Supermarket',
                    amount: 659.57,
                    createdAt: new Date('2021-04-11 11:57:35')
                },

            ]
        })
    },

    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
            return this.schema.all('transaction')
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
