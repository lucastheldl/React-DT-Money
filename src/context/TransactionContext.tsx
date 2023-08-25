import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

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
  fetchTransactions: (query: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  category: string;
  valor: number;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: { q: query, _sort: "createdAt", _order: "desc" },
    });
    /*const url = new URL("http://localhost:3000/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }
    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument*/
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, category, valor, type } = data;
    //id: json create by itself, createdAt in a real back end is usually created by itself
    const response = await api.post("/transactions", {
      description,
      category,
      valor,
      type,
      createdAt: new Date(),
    });
    //[response.data, ...prevState] is in this order to put the new data in front of the rest of the array
    setTransactions((prevState) => [response.data, ...prevState]);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
