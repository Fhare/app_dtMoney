import { useContext } from "react";

import { NewTransactionContext } from "../contexts/NewTransactionProvider";

export function useTransaction() {
  const value = useContext(NewTransactionContext);

  return value;
}