import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightlight,
  TransactionContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div className="">
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
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
