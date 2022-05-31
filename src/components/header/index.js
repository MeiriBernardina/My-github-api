import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <form>
          <div className="mb-3">

            <h1>Pesquise um Usuário do GitHub:</h1>
        <input 
          type="text"
          className="form-control"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
          </div>
          </form>
        <button type="submit" onClick={submitGetUser} className="btn btn-primary">
          <span>Buscar</span>
        </button>
   
        
        
      </S.Wrapper>
    </header>
  );
};

export default Header;