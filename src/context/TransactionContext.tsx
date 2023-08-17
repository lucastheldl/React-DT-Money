import { ReactNode, createContext, useEffect, useState } from "react";

export interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  valor: number;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[];
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function getTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTransactions(data);
    console.log(data);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
