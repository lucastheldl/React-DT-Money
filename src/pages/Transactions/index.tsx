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
                      {transaction.valor}
                    </PriceHightlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant="income">R$ 12.200,00</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>22/03/2022</td>
            </tr>
            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHightlight variant="outcome">- R$ 45,00</PriceHightlight>
              </td>
              <td>Venda</td>
              <td>22/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
