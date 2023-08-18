import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightlight,
  TransactionContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../context/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="">
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHightlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.valor)}
                    </PriceHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
