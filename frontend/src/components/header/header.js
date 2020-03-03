import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import carrinho from "../../img/carrinho3.png";

export default function header() {
  function telaLogin() {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");
    carrinho.style.display = "none";
    input.style.display = "none";
    link.style.display = "none";
  }

  function telaMain() {
    var input = document.getElementById("input-pesquisa");
    var link = document.getElementById("link-tela-login");
    var carrinho = document.getElementById("carrinho");
    carrinho.style.display = "block";
    input.style.display = "block";
    link.style.display = "block";
  }

  return (
    <header className="main-header">
      <Link to="/" className="  link" id="logo" onClick={telaMain}>
        LOJA
      </Link>
      <input id="input-pesquisa" type="text" placeholder="pesquisar" />

      <Link
        className="link"
        id="link-tela-login"
        to="/login"
        onClick={telaLogin}
      >
        Entrar
      </Link>

      <img id="carrinho" src={carrinho} alt="" />
    </header>
  );
}
