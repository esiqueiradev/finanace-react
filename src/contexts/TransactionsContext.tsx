import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TransactionsContext = createContext<Transaction[]>([]);

interface TransactionsContextProps {
  children: React.ReactNode;
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

export const TransactionsProvider = (props: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        const { transactions } = response.data as { transactions: Transaction[] }; 
        setTransactions(transactions);
      });
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>)
};
