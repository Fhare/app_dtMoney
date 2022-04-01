import React, { ReactNode, createContext, useState } from "react";

interface NewTransactionProviderProps {
  children: ReactNode;
}

type TransactionsProps = {
  id: number;
  title: string;
  amount: number;
  type?: string;
};

interface NewTrasactionType {
  name: string;
  price: string;
  transaction: TransactionsProps | undefined;
  setName: (name: string) => void;
  setPrice: (price: string) => void;
  setTransacion: (transaction: TransactionsProps) => void;
  addNewTransaction: () => void;
}

export const NewTransactionContext = createContext({} as NewTrasactionType);

export function NewTransactionProvider({ children }: NewTransactionProviderProps) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [transaction, setTransacion] = useState<TransactionsProps>();

  function addNewTransaction() {
    const convertedPrice = parseInt(price);

    const newTransaction = {
      id: Math.random(),
      title: name,
      amount: convertedPrice
    }

    setTransacion(newTransaction);
  }

  return (
    <NewTransactionContext.Provider value={{ 
      name,
      setName,
      price,
      setPrice,
      transaction,
      setTransacion,
      addNewTransaction
     }}>
      {children}
    </NewTransactionContext.Provider>
  )
}