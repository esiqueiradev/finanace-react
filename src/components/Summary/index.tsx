import { useEffect, useState } from "react";
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import total from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";
import { currencyParser } from "../../helpers/currencyParser";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);

  useEffect(() => {
    let income = 0;
    let outcome = 0;

    transactions.forEach(transaction => {
      if (transaction.type === "deposit") {
        income += transaction.amount;
      } else {
        outcome += transaction.amount;
      }
    });

    setTotalIncome(income);
    setTotalOutcome(outcome);
  }, [transactions]);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>{currencyParser(totalIncome)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>- {currencyParser(totalOutcome)}</strong>
      </div>
      <div className="total-summary">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>{currencyParser(totalIncome - totalOutcome)}</strong>
      </div>
    </Container>
  )
}