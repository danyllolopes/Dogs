import React from "react";
import { Link } from "react-router-dom";
import sytles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={sytles.header}>
      <nav className={`${sytles.nav} + container`}>
        <Link to="/" className={sytles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={sytles.login}>
           {data.nome}
         
          </Link>
        ) : (
          <Link to="/login" className={sytles.login}>
            Login / Criar
          </Link>
        )}
      
      </nav>
    </header>
  );
};

export default Header;
