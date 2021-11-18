import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
interface TransactionsContextProps {
  children: React.ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export interface TransactionContextValue {
  transactions: Transaction[];
  addTransaction: (transaction: TransactionInput) => void;
}


export const TransactionsContext = createContext<TransactionContextValue>(
  {} as TransactionContextValue
);

export const TransactionsProvider = (props: TransactionsContextProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        const { transactions: data } = response.data as { transactions: Transaction[] }; 
        setTransactions(data);
      });
  }, []);

  const addTransaction = (transaction: TransactionInput) => {
    api.post("/transactions", transaction)
      .then(response => {
        const { transaction } = response.data as { transaction: Transaction };
        setTransactions([...transactions, transaction]);
      });
  }

  return (
    <TransactionsContext.Provider value={{transactions, addTransaction}}>
      {props.children}
    </TransactionsContext.Provider>)
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  
  return context;
}
