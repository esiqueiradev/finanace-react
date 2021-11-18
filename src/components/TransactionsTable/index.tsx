import { useTransactions } from "../../hooks/useTransactions";
import { currencyParser } from "../../helpers/currencyParser";
import { dateParser } from "../../helpers/dateParser";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

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