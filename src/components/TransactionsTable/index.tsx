import { useEffect, useState } from "react";
import { currencyParser } from "../../helpers/currencyParser";
import { dateParser } from "../../helpers/dateParser";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        const { transactions } = response.data as { transactions: Transaction[] }; 
        setTransactions(transactions);
      });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {currencyParser(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{dateParser(transaction.createdAt)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}