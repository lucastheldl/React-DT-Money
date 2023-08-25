import { TransactionContext } from "../context/TransactionContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.valor;
        acc.total += transaction.valor;
      } else {
        acc.outcome += transaction.valor;
        acc.total -= transaction.valor;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
}
