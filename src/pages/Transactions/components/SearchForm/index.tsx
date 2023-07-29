import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
