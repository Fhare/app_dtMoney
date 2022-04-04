import React, { ReactNode, createContext, useState } from "react";

interface NewTransactionProviderProps {
  children: ReactNode;
}

type TransactionsProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
};

interface NewTrasactionType {
  name: string;
  price: string;
  type: string;
  transactions: TransactionsProps[];
  setName: (name: string) => void;
  setPrice: (price: string) => void;
  setType: (type: string) => void;
  setTransacions: (transaction: TransactionsProps[]) => void;
  addNewTransaction: () => void;
}

export const NewTransactionContext = createContext({} as NewTrasactionType);

export function NewTransactionProvider({ children }: NewTransactionProviderProps) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [transactions, setTransacions] = useState<TransactionsProps[]>([]);

  function addNewTransaction() {
    const convertedPrice = parseInt(price);

    const newTransaction = {
      id: Math.random(),
      title: name,
      amount: convertedPrice,
      type
    }

    setTransacions([...transactions, newTransaction]);
  }

  return (
    <NewTransactionContext.Provider value={{ 
      name,
      setName,
      price,
      setPrice,
      type,
      setType,
      transactions,
      setTransacions,
      addNewTransaction
     }}>
      {children}
    </NewTransactionContext.Provider>
  )
}